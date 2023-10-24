export * from "./export-components";
declare const _default: {
    install: (app: any) => void;
    FYButton: any;
    FYInput: any;
    FYCascader: any;
    FYDatePicker: any;
    createRangeDatePicker: typeof YHComponents.createRangeDatePicker;
    FYEmpty: any;
    FYTimeLine: any;
    FYProgress: any;
    FYSelect: any;
    FYSwitch: any;
    FYFilterPanel: any;
    mapperToOptions(mapper: any): {
        label: string;
        value: any;
    }[];
    LOGICAL_MAPPER: {
        且: string;
        或: string;
    };
    RELATION_DIGIT_MAPPER: {
        等于: string;
        大于: string;
        小于: string;
        介于: string;
        为空: string;
        非空: string;
    };
    RELATION_MAPPER: {
        属于: string;
        不属于: string;
        为空: string;
        非空: string;
    };
    installFilterPanelItem(item: any): void;
    filterPanelItemMap: Map<any, any>;
    useForm(filterItem: any): {
        model: import("vue").Ref<{}>;
        rules: import("vue").ComputedRef<{
            [x: number]: any;
        }>;
        FormItem: import("vue").ComputedRef<any>;
        formItemProps: import("vue").ComputedRef<any>;
        formEl: import("vue").Ref<any>;
        validate: () => Promise<{}>;
    };
    useRelation(filterValue: any, filterItem: any): {
        relationOptions: import("vue").Ref<{
            label: string;
            value: any;
        }[]>;
        relationValue: import("vue").Ref<string>;
    };
    useFilter(props: any): {
        filterValue: import("vue").Ref<any>;
        filterOptions: import("vue").ComputedRef<any>;
        filterItem: import("vue").Ref<any>;
    };
    FYLoading: any;
    FYSkeleton: any;
    FYDialog: any;
    FilterInline: import("vue").DefineComponent<{
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
    FYFilterInline: any;
    useFormModel(props: any): import("vue").Ref<{}>;
    useFormItems(props: any, model: any): import("vue").ComputedRef<any>;
    installFilterInlineItem(item: any): void;
    filterInlineItemMap: Map<any, any>;
    FYFilterDisplay: any;
    useUnfold(): {
        unfold: import("vue").Ref<boolean>;
        toggle: () => boolean;
    };
    installFilterDisplayItem(item: any): void;
    filterDisplayItemMap: Map<any, any>;
    FYActionPanel: any;
    FYTree: any;
    FYForm: any;
    installFormItem(item: any): void;
    formItemMap: Map<any, any>;
    FYUpload: any;
    FYTable: any;
    FYPagination: any;
    FYMenu: any;
    FYNavigation: any;
    FYTopNavigation: any;
    useMemberCheck: typeof YHComponents.useMemberCheck;
    FYMemberSelect: any;
    FYAvatar: any;
    FYMapCoordselection: any;
    FYVideoPlayer: any;
    FYImagePreview: any;
};
export default _default;
import * as YHComponents from './export-components';
//# sourceMappingURL=index.d.ts.map