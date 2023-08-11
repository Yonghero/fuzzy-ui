export function useMemberCheck(props: any, emit: any): {
    checkedValues: import("vue").Ref<any[]>;
    onToggle: (item: any) => void;
};
export const Select: import("vue").DefineComponent<{
    tmplItem: {
        type: ObjectConstructor;
        default: () => {
            options: any[];
        };
    };
    values: {
        type: ArrayConstructor;
        default: () => any[];
    };
    searchVal: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "check"[], "check", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tmplItem: {
        type: ObjectConstructor;
        default: () => {
            options: any[];
        };
    };
    values: {
        type: ArrayConstructor;
        default: () => any[];
    };
    searchVal: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onCheck?: (...args: any[]) => any;
}, {
    values: unknown[];
    tmplItem: Record<string, any>;
    searchVal: string;
}, {}>;
export const TreeSelect: import("vue").DefineComponent<{
    tmplItem: {
        type: ObjectConstructor;
        default: () => {
            options: any[];
        };
    };
    values: {
        type: ArrayConstructor;
        default: () => any[];
    };
    searchVal: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "check"[], "check", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tmplItem: {
        type: ObjectConstructor;
        default: () => {
            options: any[];
        };
    };
    values: {
        type: ArrayConstructor;
        default: () => any[];
    };
    searchVal: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onCheck?: (...args: any[]) => any;
}, {
    values: unknown[];
    tmplItem: Record<string, any>;
    searchVal: string;
}, {}>;
//# sourceMappingURL=BuiltInSelect.d.ts.map