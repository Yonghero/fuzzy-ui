declare var _default: import("vue").DefineComponent<{
    template: {
        type: ArrayConstructor;
        default: () => any[];
    };
    labelConfig: {
        type: ObjectConstructor;
        default: () => {
            position: string;
            width: number;
        };
    };
    lang: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "submit"[], "submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    template: {
        type: ArrayConstructor;
        default: () => any[];
    };
    labelConfig: {
        type: ObjectConstructor;
        default: () => {
            position: string;
            width: number;
        };
    };
    lang: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onSubmit?: (...args: any[]) => any;
}, {
    template: unknown[];
    labelConfig: Record<string, any>;
    lang: string;
    loading: boolean;
}, {}>;
export default _default;
//# sourceMappingURL=FilterInline.d.ts.map