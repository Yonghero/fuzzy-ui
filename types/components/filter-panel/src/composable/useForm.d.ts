export function useForm(filterItem: any): {
    model: import("vue").Ref<{}>;
    rules: import("vue").ComputedRef<{
        [x: number]: any;
    }>;
    FormItem: import("vue").ComputedRef<any>;
    formItemProps: import("vue").ComputedRef<any>;
    formEl: import("vue").Ref<any>;
    validate: () => Promise<{}>;
};
//# sourceMappingURL=useForm.d.ts.map