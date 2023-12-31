declare const _default: import("vue").DefineComponent<{
    columnIndex: {
        type: BooleanConstructor;
        default: boolean;
    };
    columnSelection: {
        type: BooleanConstructor;
        default: boolean;
    };
    pageSize: {
        type: NumberConstructor;
        default: number;
    };
    pageCurrent: {
        type: NumberConstructor;
        default: number;
    };
    data: {
        type: ArrayConstructor;
        default: () => any[];
    };
    renderer: {
        type: ObjectConstructor;
        default: () => {};
    };
    template: {
        type: ArrayConstructor;
        default: () => any[];
    };
}, () => JSX.Element, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("selection" | "headerSelection")[], "selection" | "headerSelection", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    columnIndex: {
        type: BooleanConstructor;
        default: boolean;
    };
    columnSelection: {
        type: BooleanConstructor;
        default: boolean;
    };
    pageSize: {
        type: NumberConstructor;
        default: number;
    };
    pageCurrent: {
        type: NumberConstructor;
        default: number;
    };
    data: {
        type: ArrayConstructor;
        default: () => any[];
    };
    renderer: {
        type: ObjectConstructor;
        default: () => {};
    };
    template: {
        type: ArrayConstructor;
        default: () => any[];
    };
}>> & {
    onSelection?: (...args: any[]) => any;
    onHeaderSelection?: (...args: any[]) => any;
}, {
    template: unknown[];
    data: unknown[];
    pageCurrent: number;
    pageSize: number;
    columnIndex: boolean;
    columnSelection: boolean;
    renderer: Record<string, any>;
}, {}>;
export default _default;
//# sourceMappingURL=table.d.ts.map