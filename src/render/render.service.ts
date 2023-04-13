import { singleton } from "tsyringe";
import { Logger } from "../utils/logger";
import { DeleteResult, RenderDataModel, RenderResult, SourceElementModel, RemoveParamsModel, RenderParamsModel } from "./render.model";
import { routeGuardIncludesFunction } from "../guards/route.guard";
import { elementShouldExistGuardFunction, elementShouldNotExistGuardFunction } from "../guards/element-existence.guard";

@singleton()
export class RenderService {
    /**
     * render
     */
    public render(params: RenderParamsModel): SourceElementModel | RenderResult {
        if (params.place && params.element) {
            // perform guard checks
            if (params.guards === undefined || this.checkByGuards(params) === true) {
                if (params.renderBefore) {
                    params.place.insertBefore(params.element, params.renderBefore);
                } else {
                    params.place.appendChild(params.element);
                }
                Logger.log(`ℹ️ Rendered "${params.element?.innerText || `an element with tag "${params.element?.tagName}"`}"`);
                return params.element;
            } else {
                Logger.log("🔴 Nothing was rendered. The most likely reason: guards", "warn")
                return RenderResult.FAIL;
            }
        } else {
            Logger.log("🔴 Nothing was rendered. The most likely reason: no element to render in", "warn")
            return RenderResult.NOELEMENT;
        }
    }

    public remove(elem: RemoveParamsModel): DeleteResult {
        if (elem) {
            elem.parentNode?.removeChild(elem);
            return DeleteResult.SUCCESS
        } else {
            return DeleteResult.NOELEMENT
        }
    }

    private checkByGuards(params: RenderParamsModel): boolean {
        type CheckFn = () => boolean;

        // higher order function
        function performCascadeCheck(checks: CheckFn[]): boolean {
            return checks.every((check) => check());
        }

        // put all checks in an array
        const checks: CheckFn[] = [
            () => params.guards?.routes !== undefined ? params.guards?.routes.filter(route => routeGuardIncludesFunction(route) === true)?.length > 0 : true,
            () => params.guards?.elementShouldExist?.every(elem => elementShouldExistGuardFunction(elem.selector) === true) ?? true,
            () => params.guards?.elementShouldNotExist?.every(elem => elementShouldNotExistGuardFunction(elem.selector) === true) ?? true,
            () => params.guards?.unique === true ? elementShouldNotExistGuardFunction(params.element?.id) === true : true
          ];

        // let result = false;
        // if (params.guards) {
        //     if (params.guards?.routes) {
        //         params.guards.routes.every(route => routeGuardIncludesFunction(route) === true);
        //     } else if (params.guards?.elementShouldExist) {
        //         params.guards.elementShouldExist.every(elem => elementShouldExistGuardFunction(elem.selector) === true);
        //     } else if (params.guards?.elementShouldNotExist) {
        //         params.guards.elementShouldNotExist.every(elem => elementShouldNotExistGuardFunction(elem.selector) === true);
        //     } else if (params.guards?.unique === true) {
        //         elementShouldNotExistGuardFunction(params.element?.id) === true;
        //     } else {
        //         result = true;
        //     }
            
        // } else {
        //     result = true;
        // }
        // return result;

        let result = false;
        if (performCascadeCheck(checks)) {
            result = true;
        }
        return result;
    }
}