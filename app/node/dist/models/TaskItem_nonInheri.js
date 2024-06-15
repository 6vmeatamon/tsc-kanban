var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
import { bound } from "../decorator/bindThis.js";
import { TASK_STATUS } from "../types/TaskStatus.js";
let TaskItem = (() => {
    let _instanceExtraInitializers = [];
    let _clickHandler_decorators;
    return class TaskItem {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _clickHandler_decorators = [bound];
            __esDecorate(this, null, _clickHandler_decorators, { kind: "method", name: "clickHandler", static: false, private: false, access: { has: obj => "clickHandler" in obj, get: obj => obj.clickHandler }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        task = (__runInitializers(this, _instanceExtraInitializers), void 0);
        templateEl;
        element;
        constructor(templateId, _task) {
            this.templateEl = document.querySelector(templateId);
            const clone = this.templateEl.content.cloneNode(true);
            this.element = clone.firstElementChild;
            this.task = _task;
            this.setup();
            this.bindEvents();
        }
        setup() {
            this.element.querySelector("h2").textContent = `${this.task.title}`; //!は非NULLアサーション
            this.element.querySelector("p").textContent = `${this.task.description}`;
        }
        mount(selector) {
            const targetEl = document.querySelector(selector);
            targetEl.insertAdjacentElement("beforeend", this.element);
        }
        clickHandler() {
            if (!this.element.parentElement)
                return;
            const currentListId = this.element.parentElement.id;
            const taskStatusIdx = TASK_STATUS.indexOf(currentListId);
            if (taskStatusIdx === -1) {
                throw new Error(`タスクステータスが不正です！`);
            }
            const nextListId = TASK_STATUS[taskStatusIdx + 1];
            if (nextListId) {
                const nextListEl = document.getElementById(nextListId);
                nextListEl.appendChild(this.element);
                return;
            }
            this.element.remove();
        }
        bindEvents() {
            this.element.addEventListener("click", this.clickHandler);
        }
    };
})();
export { TaskItem };
