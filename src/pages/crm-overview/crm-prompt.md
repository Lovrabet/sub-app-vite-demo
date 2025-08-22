 我需要做一个crm的dashboard的页面，服务端已经有多个核心业务模块的列表接口；


页面地址列表：
- 客户等级列表：https://app-619c8afe.app.yuntooai.com/d9e2425802374641aca8b379ab7f7402
- 商业机会列表：https://app-619c8afe.app.yuntooai.com/f947cfca24c64342bea6bd60a37c9078
- 客户信息列表：https://app-619c8afe.app.yuntooai.com/68a50b1cbc7c4fc9a1686a2366301da6
- 客户联系人列表：https://app-619c8afe.app.yuntooai.com/c010339ef16a4568822f8d3611b027db
- 产品信息列表：https://app-619c8afe.app.yuntooai.com/2e42a7c1f2f54facb971894a57fea0c3
- 销售员工列表：https://app-619c8afe.app.yuntooai.com/d0a4338f8bb845aaa23482150a8194e1
- 客户拜访记录列表：https://app-619c8afe.app.yuntooai.com/8fc2a2a27870437aaf23ef063ba141b6
 


### 1、客户等级列表页面的详情接口
- 接口地址：

https://api.yuntooai.com/smartapi/page/detail?pageId=71207 
- 接口返回的快照：
``` typescript
{
    "success": true,
    "msg": "查询成功",
    "errorMsg": "",
    "errorCode": "0000",
    "data": {
        "pageId": 71207,
        "pageCode": "d9e2425802374641aca8b379ab7f7402",
        "name": "客户等级列表",
        "code": "{\"version\":\"1.0.0\",\"componentsMap\":[{\"componentName\":\"YtFilter\",\"exportName\":\"YtFilter\",\"version\":\"1.0.0\",\"main\":\"\",\"destructuring\":true,\"conditionGroup\":\"\",\"package\":\"@yuntoo/antd-meta\"},{\"componentName\":\"YtTable\",\"exportName\":\"YtTable\",\"version\":\"1.0.0\",\"main\":\"\",\"destructuring\":true,\"conditionGroup\":\"\",\"package\":\"@yuntoo/antd-meta\"},{\"componentName\":\"YtSmartFtp\",\"exportName\":\"YtSmartFtp\",\"version\":\"1.0.0\",\"main\":\"\",\"destructuring\":true,\"conditionGroup\":\"\",\"package\":\"@yuntoo/antd-smart\"},{\"componentName\":\"YtPage\",\"exportName\":\"YtPage\",\"version\":\"1.0.0\",\"main\":\"\",\"destructuring\":true,\"conditionGroup\":\"\",\"package\":\"@yuntoo/antd-meta\"},{\"componentName\":\"Page\",\"exportName\":\"Page\",\"version\":\"1.0.0\",\"main\":\"\",\"destructuring\":true,\"conditionGroup\":\"\",\"devMode\":\"proCode\"}],\"componentsTree\":[{\"componentName\":\"Page\",\"id\":\"node_4ba4289fae08\",\"props\":{\"ref\":\"outerView\",\"style\":{\"height\":\"100%\"}},\"children\":[{\"componentName\":\"YtPage\",\"id\":\"node_ocmbrd2ucj1\",\"props\":{\"ref\":\"ytpage_ocmbrd2ucj1\",\"_uniqueId\":\"ytpage_ocmbrd2ucj1\",\"_context\":{\"type\":\"JSExpression\",\"value\":\"this\"}},\"children\":[{\"componentName\":\"YtSmartFtp\",\"id\":\"node_ocmbogq92c1\",\"props\":{\"ref\":\"ytsmartftp_ocmbogq92c1\",\"_uniqueId\":\"ytsmartftp_ocmbogq92c1\",\"_context\":{\"type\":\"JSExpression\",\"value\":\"this\"}},\"children\":[{\"componentName\":\"YtFilter\",\"id\":\"node_76f6392546ff\",\"props\":{\"_context\":{\"type\":\"JSExpression\",\"value\":\"this\"},\"_uniqueId\":\"ytfilter_76f6392546ff\",\"ref\":\"ytfilter_76f6392546ff\",\"valuesKey\":\"ytfilter_76f6392546ff_values\",\"items\":[{\"componentName\":\"YtSingleSelect\",\"label\":\"等级名称\",\"name\":\"level_name\",\"__lc_as_item_id__\":\"659453\",\"placeholder\":\"请选择客户等级名称\",\"tooltip\":\"客户等级的名称，用于标识不同等级的名称，如：VIP1、VIP2等\",\"hidden\":false,\"filterVisible\":true,\"tableVisible\":true,\"systemRetain\":false,\"rules\":[]},{\"componentName\":\"YtInputNumber\",\"label\":\"折扣比例\",\"name\":\"discount\",\"__lc_as_item_id__\":\"659454\",\"placeholder\":\"请输入0-100之间的数字，如：95\",\"tooltip\":\"该等级对应的折扣比例，用于计算客户享受的优惠\",\"extra\":\"请输入0-100之间的数字，最多保留两位小数\",\"hidden\":false,\"filterVisible\":true,\"tableVisible\":true,\"systemRetain\":false,\"rules\":[]},{\"componentName\":\"YtSingleSelect\",\"label\":\"状态\",\"name\":\"status\",\"__lc_as_item_id__\":\"659456\",\"placeholder\":\"请选择状态\",\"tooltip\":\"客户等级的启用或禁用状态，禁用后该等级不可用\",\"hidden\":false,\"filterVisible\":true,\"tableVisible\":true,\"systemRetain\":false,\"options\":[{\"label\":\"启用\",\"value\":1,\"children\":null},{\"label\":\"禁用\",\"value\":0,\"children\":null}]}],\"layout\":\"vertical\",\"events\":[{\"optType\":\"flowAction\",\"name\":\"onSearch\",\"__lc_as_item_id__\":\"e19c40898632\",\"flowList\":[{\"active\":true,\"optType\":\"request\",\"__lc_as_item_id__\":\"3e1f19d38d54\",\"options\":{\"_bindDataSource\":\"getList\",\"_autoBindDataSourceParams\":true,\"confirmConfig\":{\"enable\":false},\"responseConfig\":{\"successToastMsg\":\"查询成功！\",\"errorToastMsg\":\"查询失败\"},\"redirectType\":\"current\"}}]}]},\"children\":[],\"hidden\":false,\"title\":\"\",\"isLocked\":false,\"condition\":true,\"conditionGroup\":\"\"},{\"componentName\":\"YtTable\",\"id\":\"node_70bcb7c6534c\",\"props\":{\"_context\":{\"type\":\"JSExpression\",\"value\":\"this\"},\"ref\":\"yttable_70bcb7c6534c\",\"_uniqueId\":\"yttable_70bcb7c6534c\",\"dataSource\":{\"type\":\"JSExpression\",\"value\":\"this.state.getList\"},\"rowKey\":\"id\",\"columns\":[{\"title\":\"ID\",\"dataIndex\":\"id\",\"key\":\"id\",\"__lc_as_item_id__\":\"764e2a990fe6\"},{\"title\":\"等级名称\",\"dataIndex\":\"level_name\",\"key\":\"level_name\",\"__lc_as_item_id__\":\"659453\",\"placeholder\":\"请选择客户等级名称\",\"tooltip\":\"客户等级的名称，用于标识不同等级的名称，如：VIP1、VIP2等\",\"hidden\":false,\"filterVisible\":true,\"tableVisible\":true,\"systemRetain\":false,\"rules\":[{\"type\":\"required\",\"message\":\"请输入\"}],\"format\":\"yuntooEnum\"},{\"title\":\"折扣比例\",\"dataIndex\":\"discount\",\"key\":\"discount\",\"__lc_as_item_id__\":\"659454\",\"placeholder\":\"请输入0-100之间的数字，如：95\",\"tooltip\":\"该等级对应的折扣比例，用于计算客户享受的优惠\",\"extra\":\"请输入0-100之间的数字，最多保留两位小数\",\"hidden\":false,\"filterVisible\":true,\"tableVisible\":true,\"systemRetain\":false,\"rules\":[{\"type\":\"required\",\"message\":\"请输入\"}],\"format\":\"number\"},{\"title\":\"状态\",\"dataIndex\":\"status\",\"key\":\"status\",\"__lc_as_item_id__\":\"659456\",\"placeholder\":\"请选择状态\",\"tooltip\":\"客户等级的启用或禁用状态，禁用后该等级不可用\",\"hidden\":false,\"filterVisible\":true,\"tableVisible\":true,\"systemRetain\":false,\"options\":[{\"label\":\"启用\",\"value\":1,\"children\":null},{\"label\":\"禁用\",\"value\":0,\"children\":null}],\"format\":\"yuntooEnum\"}],\"pagination\":{\"enable\":true,\"currentPageKey\":\"yttable_70bcb7c6534c_currentPage\",\"pageSizeKey\":\"yttable_70bcb7c6534c_pageSize\",\"totalKey\":\"yttable_70bcb7c6534c_total\"},\"toolbar\":{\"enable\":true,\"globalButtons\":[{\"title\":\"新增\",\"type\":\"primary\",\"size\":\"medium\",\"optType\":\"jsAction\",\"__lc_as_item_id__\":\"4ffd788f62e3\",\"options\":{\"jsFunction\":{\"type\":\"JSFunction\",\"value\":\"(config) => config._context?.appHelper?.yt?.smartPageHistory?.push({ pageTagName: 'form' })\"}}}]},\"operateButtonsEnable\":true,\"operateButtons\":[{\"title\":\"更新\",\"type\":\"default\",\"size\":\"medium\",\"optType\":\"jsAction\",\"__lc_as_item_id__\":\"a578ad36a600\",\"options\":{\"jsFunction\":{\"type\":\"JSFunction\",\"value\":\"(config) => config._context?.appHelper?.yt?.smartPageHistory?.push({ pageTagName: 'edit', dataid: config.extraParams?.rowKey })\"}}},{\"title\":\"详情\",\"type\":\"default\",\"size\":\"medium\",\"optType\":\"jsAction\",\"__lc_as_item_id__\":\"8e10e806af82\",\"options\":{\"jsFunction\":{\"type\":\"JSFunction\",\"value\":\"(config) => config._context?.appHelper?.yt?.smartPageHistory?.push({ pageTagName: 'detail', dataid: config.extraParams?.rowKey })\"}}},{\"title\":\"删除\",\"type\":\"default\",\"size\":\"medium\",\"optType\":\"flowAction\",\"__lc_as_item_id__\":\"fa514db3730d\",\"options\":{\"flowList\":[{\"active\":true,\"optType\":\"request\",\"__lc_as_item_id__\":\"5016197dd630\",\"options\":{\"_bindDataSource\":\"delete\",\"_autoBindDataSourceParams\":false,\"_bindDataSourceParams\":{\"type\":\"JSFunction\",\"value\":\"(extraParams) => { return { id: extraParams.rowKey?.toString() }; }\"},\"confirmConfig\":{\"enable\":true,\"type\":\"confirm\",\"title\":\"确认删除\",\"content\":\"确认删除该条数据吗？\"},\"responseConfig\":{\"enableSuccessToast\":true,\"enableErrorToast\":true,\"successToastMsg\":\"删除成功\",\"errorToastMsg\":\"删除失败\"}}},{\"active\":true,\"optType\":\"request\",\"__lc_as_item_id__\":\"07741b9eccba\",\"options\":{\"_bindDataSource\":\"getList\",\"_autoBindDataSourceParams\":false,\"confirmConfig\":{\"enable\":false}}}],\"_autoBindDataSourceParams\":false,\"redirectType\":\"current\"}}]},\"children\":[],\"hidden\":false,\"title\":\"\",\"isLocked\":false,\"condition\":true,\"conditionGroup\":\"\"}],\"hidden\":false,\"title\":\"\",\"isLocked\":false,\"condition\":true,\"conditionGroup\":\"\"}],\"hidden\":false,\"title\":\"\",\"isLocked\":false,\"condition\":true,\"conditionGroup\":\"\"}],\"hidden\":false,\"title\":\"\",\"isLocked\":false,\"condition\":true,\"conditionGroup\":\"\",\"dataSource\":{\"list\":[{\"type\":\"urlParams\",\"id\":\"urlParams\",\"isInit\":true,\"options\":{}},{\"type\":\"fetch\",\"id\":\"getList\",\"isInit\":true,\"options\":{\"method\":\"POST\",\"uri\":\"/dbapi/runtime/yuntoo/app-619c8afe/149ec2c6ad9045e9a6a615d27810dec8/getList\",\"isCors\":true,\"timeout\":5000,\"paramsArr\":[{\"name\":\"status\",\"type\":\"expression\",\"required\":false,\"description\":\"状态\",\"value\":\"this.state.ytfilter_76f6392546ff_values?.status\"},{\"name\":\"discount\",\"type\":\"expression\",\"required\":false,\"description\":\"折扣比例\",\"value\":\"this.state.ytfilter_76f6392546ff_values?.discount\"},{\"name\":\"level_id\",\"type\":\"expression\",\"required\":false,\"description\":\"等级ID\",\"value\":\"this.state.ytfilter_76f6392546ff_values?.level_id\"},{\"name\":\"pageSize\",\"type\":\"expression\",\"required\":true,\"description\":\"\",\"value\":\"this.state.yttable_70bcb7c6534c_pageSize\"},{\"name\":\"createTime\",\"type\":\"expression\",\"required\":false,\"description\":\"创建时间\",\"value\":\"this.state.ytfilter_76f6392546ff_values?.createTime\"},{\"name\":\"createUser\",\"type\":\"expression\",\"required\":false,\"description\":\"创建人\",\"value\":\"this.state.ytfilter_76f6392546ff_values?.createUser\"},{\"name\":\"gmt_create\",\"type\":\"expression\",\"required\":false,\"description\":\"创建时间\",\"value\":\"this.state.ytfilter_76f6392546ff_values?.gmt_create\"},{\"name\":\"level_name\",\"type\":\"expression\",\"required\":false,\"description\":\"等级名称\",\"value\":\"this.state.ytfilter_76f6392546ff_values?.level_name\"},{\"name\":\"updateTime\",\"type\":\"expression\",\"required\":false,\"description\":\"更新时间\",\"value\":\"this.state.ytfilter_76f6392546ff_values?.updateTime\"},{\"name\":\"updateUser\",\"type\":\"expression\",\"required\":false,\"description\":\"更新人\",\"value\":\"this.state.ytfilter_76f6392546ff_values?.updateUser\"},{\"name\":\"currentPage\",\"type\":\"expression\",\"required\":true,\"description\":\"\",\"value\":\"this.state.yttable_70bcb7c6534c_currentPage\"},{\"name\":\"gmt_modified\",\"type\":\"expression\",\"required\":false,\"description\":\"修改时间\",\"value\":\"this.state.ytfilter_76f6392546ff_values?.gmt_modified\"}],\"headersArr\":[],\"params\":{\"status\":{\"type\":\"JSExpression\",\"value\":\"this.state.ytfilter_76f6392546ff_values?.status\"},\"discount\":{\"type\":\"JSExpression\",\"value\":\"this.state.ytfilter_76f6392546ff_values?.discount\"},\"level_id\":{\"type\":\"JSExpression\",\"value\":\"this.state.ytfilter_76f6392546ff_values?.level_id\"},\"pageSize\":{\"type\":\"JSExpression\",\"value\":\"this.state.yttable_70bcb7c6534c_pageSize\"},\"createTime\":{\"type\":\"JSExpression\",\"value\":\"this.state.ytfilter_76f6392546ff_values?.createTime\"},\"createUser\":{\"type\":\"JSExpression\",\"value\":\"this.state.ytfilter_76f6392546ff_values?.createUser\"},\"gmt_create\":{\"type\":\"JSExpression\",\"value\":\"this.state.ytfilter_76f6392546ff_values?.gmt_create\"},\"level_name\":{\"type\":\"JSExpression\",\"value\":\"this.state.ytfilter_76f6392546ff_values?.level_name\"},\"updateTime\":{\"type\":\"JSExpression\",\"value\":\"this.state.ytfilter_76f6392546ff_values?.updateTime\"},\"updateUser\":{\"type\":\"JSExpression\",\"value\":\"this.state.ytfilter_76f6392546ff_values?.updateUser\"},\"currentPage\":{\"type\":\"JSExpression\",\"value\":\"this.state.yttable_70bcb7c6534c_currentPage\"},\"gmt_modified\":{\"type\":\"JSExpression\",\"value\":\"this.state.ytfilter_76f6392546ff_values?.gmt_modified\"}},\"requiredParams\":[\"pageSize\",\"currentPage\"],\"headers\":{}}},{\"type\":\"fetch\",\"id\":\"getOne\",\"isInit\":false,\"options\":{\"method\":\"POST\",\"uri\":\"/dbapi/runtime/yuntoo/app-619c8afe/149ec2c6ad9045e9a6a615d27810dec8/getOne\",\"isCors\":true,\"timeout\":5000,\"paramsArr\":[{\"name\":\"id\",\"value\":null,\"type\":\"number\",\"required\":false,\"description\":\"主键\"}],\"headersArr\":[],\"params\":{},\"requiredParams\":[],\"headers\":{}}},{\"type\":\"fetch\",\"id\":\"create\",\"isInit\":false,\"options\":{\"method\":\"POST\",\"uri\":\"/dbapi/runtime/yuntoo/app-619c8afe/149ec2c6ad9045e9a6a615d27810dec8/create\",\"isCors\":true,\"timeout\":5000,\"paramsArr\":[{\"name\":\"remark\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"等级说明\"},{\"name\":\"status\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"状态\"},{\"name\":\"discount\",\"value\":null,\"type\":\"number\",\"required\":false,\"description\":\"折扣比例\"},{\"name\":\"level_id\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"等级ID\"},{\"name\":\"gmt_create\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"创建时间\"},{\"name\":\"level_name\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"等级名称\"},{\"name\":\"gmt_modified\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"修改时间\"}],\"headersArr\":[],\"params\":{},\"requiredParams\":[],\"headers\":{}}},{\"type\":\"fetch\",\"id\":\"update\",\"isInit\":false,\"options\":{\"method\":\"POST\",\"uri\":\"/dbapi/runtime/yuntoo/app-619c8afe/149ec2c6ad9045e9a6a615d27810dec8/update\",\"isCors\":true,\"timeout\":5000,\"paramsArr\":[{\"name\":\"remark\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"等级说明\"},{\"name\":\"status\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"状态\"},{\"name\":\"discount\",\"value\":null,\"type\":\"number\",\"required\":false,\"description\":\"折扣比例\"},{\"name\":\"level_id\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"等级ID\"},{\"name\":\"gmt_create\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"创建时间\"},{\"name\":\"level_name\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"等级名称\"},{\"name\":\"gmt_modified\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"修改时间\"}],\"headersArr\":[],\"params\":{},\"requiredParams\":[],\"headers\":{}}},{\"type\":\"fetch\",\"id\":\"delete\",\"isInit\":false,\"options\":{\"method\":\"POST\",\"uri\":\"/dbapi/runtime/yuntoo/app-619c8afe/149ec2c6ad9045e9a6a615d27810dec8/delete\",\"isCors\":true,\"timeout\":5000,\"paramsArr\":[{\"name\":\"id\",\"value\":null,\"type\":\"number\",\"required\":false,\"description\":\"主键\"}],\"headersArr\":[],\"params\":{},\"requiredParams\":[],\"headers\":{}}},{\"type\":\"fetch\",\"id\":\"getSelectOptions\",\"isInit\":false,\"options\":{\"method\":\"POST\",\"uri\":\"/dbapi/runtime/yuntoo/app-619c8afe/149ec2c6ad9045e9a6a615d27810dec8/getSelectOptions\",\"isCors\":true,\"timeout\":5000,\"paramsArr\":[{\"name\":\"code\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"字段编码\"}],\"headersArr\":[],\"params\":{},\"requiredParams\":[],\"headers\":{}}},{\"type\":\"fetch\",\"id\":\"getFileUrl\",\"isInit\":false,\"options\":{\"method\":\"GET\",\"uri\":\"/dbapi/runtime/yuntoo/app-619c8afe/smartapi/common/getFileUrl\",\"isCors\":true,\"timeout\":5000,\"paramsArr\":[{\"name\":\"key\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"文件在oss上的key\"}],\"headersArr\":[],\"params\":{},\"requiredParams\":[],\"headers\":{}}}]}}],\"i18n\":{}}",
        "formCode": "{\"version\":\"1.0.0\",\"componentsMap\":[{\"componentName\":\"YtForm\",\"exportName\":\"YtForm\",\"version\":\"1.0.0\",\"main\":\"\",\"destructuring\":true,\"conditionGroup\":\"\",\"package\":\"@yuntoo/antd-meta\"},{\"componentName\":\"YtSmartForm\",\"exportName\":\"YtSmartForm\",\"version\":\"1.0.0\",\"main\":\"\",\"destructuring\":true,\"conditionGroup\":\"\",\"package\":\"@yuntoo/antd-smart\"},{\"componentName\":\"YtPage\",\"exportName\":\"YtPage\",\"version\":\"1.0.0\",\"main\":\"\",\"destructuring\":true,\"conditionGroup\":\"\",\"package\":\"@yuntoo/antd-meta\"},{\"componentName\":\"Page\",\"exportName\":\"Page\",\"version\":\"1.0.0\",\"main\":\"\",\"destructuring\":true,\"conditionGroup\":\"\",\"devMode\":\"proCode\"}],\"componentsTree\":[{\"componentName\":\"Page\",\"id\":\"node_7a50678d734b\",\"props\":{\"ref\":\"outerView\",\"style\":{\"height\":\"100%\"}},\"children\":[{\"componentName\":\"YtPage\",\"id\":\"node_4c6b5734cf07\",\"props\":{\"ref\":\"ytpage_4c6b5734cf07\",\"_uniqueId\":\"ytpage_4c6b5734cf07\",\"_context\":{\"type\":\"JSExpression\",\"value\":\"this\"}},\"children\":[{\"componentName\":\"YtSmartForm\",\"id\":\"node_1a01b6e9f31e\",\"props\":{\"ref\":\"ytsmartform_1a01b6e9f31e\",\"_uniqueId\":\"ytsmartform_1a01b6e9f31e\",\"_context\":{\"type\":\"JSExpression\",\"value\":\"this\"}},\"children\":[{\"componentName\":\"YtForm\",\"id\":\"node_f7ba66f8b77c\",\"props\":{\"_context\":{\"type\":\"JSExpression\",\"value\":\"this\"},\"_uniqueId\":\"ytform_f7ba66f8b77c\",\"ref\":\"ytform_f7ba66f8b77c\",\"valuesKey\":\"ytform_f7ba66f8b77c_values\",\"items\":[{\"componentName\":\"YtSingleSelect\",\"label\":\"等级名称\",\"name\":\"level_name\",\"__lc_as_item_id__\":\"659453\",\"placeholder\":\"请选择客户等级名称\",\"tooltip\":\"客户等级的名称，用于标识不同等级的名称，如：VIP1、VIP2等\",\"hidden\":false,\"filterVisible\":true,\"tableVisible\":true,\"systemRetain\":false,\"rules\":[{\"type\":\"required\",\"message\":\"请输入\"}]},{\"componentName\":\"YtInputNumber\",\"label\":\"折扣比例\",\"name\":\"discount\",\"__lc_as_item_id__\":\"659454\",\"placeholder\":\"请输入0-100之间的数字，如：95\",\"tooltip\":\"该等级对应的折扣比例，用于计算客户享受的优惠\",\"extra\":\"请输入0-100之间的数字，最多保留两位小数\",\"hidden\":false,\"filterVisible\":true,\"tableVisible\":true,\"systemRetain\":false,\"rules\":[{\"type\":\"required\",\"message\":\"请输入\"}]},{\"componentName\":\"YtTextArea\",\"label\":\"等级说明\",\"name\":\"remark\",\"__lc_as_item_id__\":\"659455\",\"placeholder\":\"请输入等级说明，如：该等级适用于高价值客户，享受专属服务\",\"tooltip\":\"对客户等级的详细说明，包括适用范围、权益说明等\",\"hidden\":false,\"filterVisible\":false,\"tableVisible\":false,\"systemRetain\":false},{\"componentName\":\"YtRadioGroup\",\"label\":\"状态\",\"name\":\"status\",\"__lc_as_item_id__\":\"659456\",\"placeholder\":\"请选择状态\",\"tooltip\":\"客户等级的启用或禁用状态，禁用后该等级不可用\",\"hidden\":false,\"filterVisible\":true,\"tableVisible\":true,\"systemRetain\":false,\"options\":[{\"label\":\"启用\",\"value\":1,\"children\":null},{\"label\":\"禁用\",\"value\":0,\"children\":null}]}],\"footer\":[{\"title\":\"提交\",\"type\":\"primary\",\"size\":\"medium\",\"optType\":\"flowAction\",\"__lc_as_item_id__\":\"07918d79cdd528\",\"options\":{\"flowList\":[{\"active\":true,\"optType\":\"submit\",\"options\":{\"_bindForm\":\"ytform_f7ba66f8b77c\",\"_bindDataSource\":\"create\",\"_autoBindDataSourceParams\":true,\"responseConfig\":{\"enableSuccessToast\":true,\"enableErrorToast\":true,\"successToastMsg\":\"提交成功！\",\"errorToastMsg\":\"\"}}},{\"active\":true,\"optType\":\"jsAction\",\"__lc_as_item_id__\":\"9cde6f6e9eed3\",\"options\":{\"jsFunction\":{\"type\":\"JSFunction\",\"value\":\"(config) => {\\n// OnePage 逻辑\\n// 在没有更加详细的逻辑之前，先更新所有表格\\nwindow.__rendererInstanceRegistry?.instances.values().forEach((item) => item.instance.dataSourceMap['getList']?.load());\\n}\"}}},{\"active\":true,\"optType\":\"jsAction\",\"__lc_as_item_id__\":\"567aef6e2ba418\",\"options\":{\"jsFunction\":{\"type\":\"JSFunction\",\"value\":\"(config) => {\\nconst { getFlowActionInfo, _context } = config;\\nconst { flowList } = getFlowActionInfo();\\nconfig._context?.appHelper?.yt?.smartPageHistory?.push({ pageTagName: 'result', dataid: flowList?.[0]?.__flow_results__ });\\n}\"}}}],\"redirectType\":\"current\"}},{\"title\":\"重置\",\"type\":\"default\",\"size\":\"medium\",\"optType\":\"reset\",\"__lc_as_item_id__\":\"fde59d75a9aa1\",\"options\":{\"_bindForm\":\"ytform_f7ba66f8b77c\",\"_autoBindDataSourceParams\":false,\"redirectType\":\"current\"}}],\"layout\":\"vertical\",\"layoutMode\":\"single\"},\"children\":[],\"hidden\":false,\"title\":\"\",\"isLocked\":false,\"condition\":true,\"conditionGroup\":\"\"}],\"hidden\":false,\"title\":\"\",\"isLocked\":false,\"condition\":true,\"conditionGroup\":\"\"}],\"hidden\":false,\"title\":\"\",\"isLocked\":false,\"condition\":true,\"conditionGroup\":\"\"}],\"hidden\":false,\"title\":\"\",\"isLocked\":false,\"condition\":true,\"conditionGroup\":\"\",\"dataSource\":{\"list\":[{\"type\":\"urlParams\",\"id\":\"urlParams\",\"isInit\":true,\"options\":{}},{\"type\":\"fetch\",\"id\":\"getOne\",\"isInit\":false,\"options\":{\"method\":\"POST\",\"uri\":\"/dbapi/runtime/yuntoo/app-619c8afe/149ec2c6ad9045e9a6a615d27810dec8/getOne\",\"isCors\":true,\"timeout\":5000,\"paramsArr\":[{\"name\":\"id\",\"value\":null,\"type\":\"number\",\"required\":false,\"description\":\"主键\"}],\"headersArr\":[],\"params\":{},\"requiredParams\":[],\"headers\":{}}},{\"type\":\"fetch\",\"id\":\"create\",\"isInit\":false,\"options\":{\"method\":\"POST\",\"uri\":\"/dbapi/runtime/yuntoo/app-619c8afe/149ec2c6ad9045e9a6a615d27810dec8/create\",\"isCors\":true,\"timeout\":5000,\"paramsArr\":[{\"name\":\"remark\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"等级说明\"},{\"name\":\"status\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"状态\"},{\"name\":\"discount\",\"value\":null,\"type\":\"number\",\"required\":false,\"description\":\"折扣比例\"},{\"name\":\"level_id\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"等级ID\"},{\"name\":\"gmt_create\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"创建时间\"},{\"name\":\"level_name\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"等级名称\"},{\"name\":\"gmt_modified\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"修改时间\"}],\"headersArr\":[],\"params\":{},\"requiredParams\":[],\"headers\":{}}},{\"type\":\"fetch\",\"id\":\"update\",\"isInit\":false,\"options\":{\"method\":\"POST\",\"uri\":\"/dbapi/runtime/yuntoo/app-619c8afe/149ec2c6ad9045e9a6a615d27810dec8/update\",\"isCors\":true,\"timeout\":5000,\"paramsArr\":[{\"name\":\"remark\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"等级说明\"},{\"name\":\"status\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"状态\"},{\"name\":\"discount\",\"value\":null,\"type\":\"number\",\"required\":false,\"description\":\"折扣比例\"},{\"name\":\"level_id\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"等级ID\"},{\"name\":\"gmt_create\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"创建时间\"},{\"name\":\"level_name\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"等级名称\"},{\"name\":\"gmt_modified\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"修改时间\"}],\"headersArr\":[],\"params\":{},\"requiredParams\":[],\"headers\":{}}},{\"type\":\"fetch\",\"id\":\"delete\",\"isInit\":false,\"options\":{\"method\":\"POST\",\"uri\":\"/dbapi/runtime/yuntoo/app-619c8afe/149ec2c6ad9045e9a6a615d27810dec8/delete\",\"isCors\":true,\"timeout\":5000,\"paramsArr\":[{\"name\":\"id\",\"value\":null,\"type\":\"number\",\"required\":false,\"description\":\"主键\"}],\"headersArr\":[],\"params\":{},\"requiredParams\":[],\"headers\":{}}},{\"type\":\"fetch\",\"id\":\"getSelectOptions\",\"isInit\":false,\"options\":{\"method\":\"POST\",\"uri\":\"/dbapi/runtime/yuntoo/app-619c8afe/149ec2c6ad9045e9a6a615d27810dec8/getSelectOptions\",\"isCors\":true,\"timeout\":5000,\"paramsArr\":[{\"name\":\"code\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"字段编码\"}],\"headersArr\":[],\"params\":{},\"requiredParams\":[],\"headers\":{}}},{\"type\":\"fetch\",\"id\":\"getFileUrl\",\"isInit\":false,\"options\":{\"method\":\"GET\",\"uri\":\"/dbapi/runtime/yuntoo/app-619c8afe/smartapi/common/getFileUrl\",\"isCors\":true,\"timeout\":5000,\"paramsArr\":[{\"name\":\"key\",\"value\":null,\"type\":\"string\",\"required\":false,\"description\":\"文件在oss上的key\"}],\"headersArr\":[],\"params\":{},\"requiredParams\":[],\"headers\":{}}}]}}],\"i18n\":{}}",
        "detailCode": null,
        "appCode": "app-619c8afe",
        "siteAppCode": "app-619c8afe",
        "siteName": "CRM系统（标准）",
        "canEdit": false,
        "model": {
            "modelId": 40529,
            "modelCode": "149ec2c6ad9045e9a6a615d27810dec8",
            "name": "客户等级",
            "source": "DB_TABLE",
            "properties": [
                {
                    "name": "等级ID",
                    "type": "SELECT",
                    "description": "等级ID",
                    "sortNum": 1,
                    "id": 659452,
                    "code": "level_id",
                    "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":false,\"pkField\":true,\"modifyDate\":false,\"autoIncrement\":true,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"系统自动生成\",\"maxLength\":20,\"createDate\":false,\"tooltip\":\"客户等级的唯一标识ID，系统自动生成不可修改\",\"tableVisible\":false,\"filterVisible\":false}",
                    "dataType": "static",
                    "model": null,
                    "idx": true,
                    "deleted": false
                },
                {
                    "name": "等级名称",
                    "type": "SELECT",
                    "description": "等级名称",
                    "sortNum": 2,
                    "id": 659453,
                    "code": "level_name",
                    "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"请选择客户等级名称\",\"maxLength\":50,\"createDate\":false,\"tooltip\":\"客户等级的名称，用于标识不同等级的名称，如：VIP1、VIP2等\",\"tableVisible\":true,\"filterVisible\":true}",
                    "dataType": "static",
                    "model": null,
                    "idx": true,
                    "deleted": false
                },
                {
                    "name": "折扣比例",
                    "type": "NUMBER",
                    "description": "折扣比例",
                    "sortNum": 3,
                    "id": 659454,
                    "code": "discount",
                    "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":\"/^[0-9]+(\\\\.[0-9]{1,2})?$/\",\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入0-100之间的数字，如：95\",\"maxLength\":12,\"createDate\":false,\"tooltip\":\"该等级对应的折扣比例，用于计算客户享受的优惠\",\"extra\":\"请输入0-100之间的数字，最多保留两位小数\",\"tableVisible\":true,\"filterVisible\":true}",
                    "dataType": "static",
                    "model": null,
                    "idx": true,
                    "deleted": false
                },
                {
                    "name": "等级说明",
                    "type": "TEXTAREA",
                    "description": "等级说明",
                    "sortNum": 4,
                    "id": 659455,
                    "code": "remark",
                    "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入等级说明，如：该等级适用于高价值客户，享受专属服务\",\"maxLength\":256,\"createDate\":false,\"tooltip\":\"对客户等级的详细说明，包括适用范围、权益说明等\",\"tableVisible\":false,\"filterVisible\":false}",
                    "dataType": "static",
                    "model": null,
                    "idx": false,
                    "deleted": false
                },
                {
                    "name": "状态",
                    "type": "RADIO",
                    "description": "状态，(可选范围：1:启用,0:禁用)",
                    "sortNum": 5,
                    "id": 659456,
                    "code": "status",
                    "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":[{\"label\":\"启用\",\"value\":1,\"children\":null},{\"label\":\"禁用\",\"value\":0,\"children\":null}],\"disabled\":false,\"placeholder\":\"请选择状态\",\"maxLength\":3,\"createDate\":false,\"tooltip\":\"客户等级的启用或禁用状态，禁用后该等级不可用\",\"tableVisible\":true,\"filterVisible\":true}",
                    "dataType": "static",
                    "model": null,
                    "idx": true,
                    "deleted": false
                },
                {
                    "name": "创建时间",
                    "type": "DATE",
                    "description": "创建时间",
                    "sortNum": 6,
                    "id": 659457,
                    "code": "gmt_create",
                    "extend": "{\"systemRetain\":true,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":true,\"placeholder\":\"系统自动维护\",\"maxLength\":19,\"createDate\":true,\"tooltip\":\"记录创建时间，系统自动维护\",\"tableVisible\":false,\"filterVisible\":false}",
                    "dataType": "static",
                    "model": null,
                    "idx": true,
                    "deleted": false
                },
                {
                    "name": "修改时间",
                    "type": "DATE",
                    "description": "修改时间",
                    "sortNum": 7,
                    "id": 659458,
                    "code": "gmt_modified",
                    "extend": "{\"systemRetain\":true,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":true,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":true,\"placeholder\":\"系统自动维护\",\"maxLength\":19,\"createDate\":false,\"tooltip\":\"记录最后修改时间，系统自动维护\",\"tableVisible\":false,\"filterVisible\":false}",
                    "dataType": "static",
                    "model": null,
                    "idx": true,
                    "deleted": false
                }
            ],
            "operations": {
                "getList": {
                    "host": "",
                    "path": "/dbapi/runtime/yuntoo/app-619c8afe/149ec2c6ad9045e9a6a615d27810dec8/getList",
                    "method": "POST",
                    "requestBody": "{\"status\": {\"type\": \"RADIO\", \"sortNum\": 5, \"description\": \"状态\"}, \"discount\": {\"type\": \"NUMBER\", \"sortNum\": 3, \"description\": \"折扣比例\"}, \"level_id\": {\"type\": \"SELECT\", \"sortNum\": 1, \"description\": \"等级ID\"}, \"pageSize\": {\"type\": \"Integer\"}, \"createTime\": {\"type\": \"DATE_RANGE\", \"sortNum\": 1002, \"description\": \"创建时间\"}, \"createUser\": {\"type\": \"EMPLOYEE\", \"sortNum\": 1001, \"description\": \"创建人\"}, \"gmt_create\": {\"type\": \"DATE\", \"sortNum\": 6, \"description\": \"创建时间\"}, \"level_name\": {\"type\": \"SELECT\", \"sortNum\": 2, \"description\": \"等级名称\"}, \"updateTime\": {\"type\": \"DATE_RANGE\", \"sortNum\": 1004, \"description\": \"更新时间\"}, \"updateUser\": {\"type\": \"EMPLOYEE\", \"sortNum\": 1003, \"description\": \"更新人\"}, \"currentPage\": {\"type\": \"Integer\"}, \"gmt_modified\": {\"type\": \"DATE\", \"sortNum\": 7, \"description\": \"修改时间\"}}",
                    "responseBody": "{\"200\": {\"msg\": {\"type\": \"String\"}, \"data\": {\"paging\": {\"pageSize\": {\"type\": \"Integer\"}, \"totalCount\": {\"type\": \"Integer\"}, \"currentPage\": {\"type\": \"Integer\"}}, \"tableData\": [{\"remark\": {\"type\": \"TEXTAREA\", \"sortNum\": 4, \"description\": \"等级说明\"}, \"status\": {\"type\": \"RADIO\", \"sortNum\": 5, \"description\": \"状态\"}, \"discount\": {\"type\": \"NUMBER\", \"sortNum\": 3, \"description\": \"折扣比例\"}, \"level_id\": {\"type\": \"SELECT\", \"sortNum\": 1, \"description\": \"等级ID\"}, \"createTime\": {\"type\": \"DATE\", \"sortNum\": 1002, \"description\": \"创建时间\"}, \"createUser\": {\"type\": \"TEXT\", \"sortNum\": 1001, \"description\": \"创建人\"}, \"gmt_create\": {\"type\": \"DATE\", \"sortNum\": 6, \"description\": \"创建时间\"}, \"level_name\": {\"type\": \"SELECT\", \"sortNum\": 2, \"description\": \"等级名称\"}, \"updateTime\": {\"type\": \"DATE\", \"sortNum\": 1004, \"description\": \"更新时间\"}, \"updateUser\": {\"type\": \"TEXT\", \"sortNum\": 1003, \"description\": \"更新人\"}, \"gmt_modified\": {\"type\": \"DATE\", \"sortNum\": 7, \"description\": \"修改时间\"}}], \"tableColumns\": [{\"title\": {\"type\": \"string\", \"description\": \"表头\"}, \"dataIndex\": {\"type\": \"string\", \"description\": \"表头字段\"}}]}, \"success\": {\"type\": \"Boolean\", \"description\": \"Boolean\"}, \"errorMsg\": {\"type\": \"String\"}, \"errorCode\": {\"type\": \"Integer\"}}}"
                },
                "getOne": {
                    "host": "",
                    "path": "/dbapi/runtime/yuntoo/app-619c8afe/149ec2c6ad9045e9a6a615d27810dec8/getOne",
                    "method": "POST",
                    "requestBody": "{\"id\": {\"type\": \"NUMBER\", \"description\": \"主键\"}}",
                    "responseBody": "{\"msg\": {\"type\": \"String\"}, \"data\": {\"id\": {\"type\": \"NUMBER\", \"description\": \"主键\"}, \"remark\": {\"type\": \"TEXTAREA\", \"sortNum\": 4, \"description\": \"等级说明\"}, \"status\": {\"type\": \"RADIO\", \"sortNum\": 5, \"description\": \"状态\"}, \"discount\": {\"type\": \"NUMBER\", \"sortNum\": 3, \"description\": \"折扣比例\"}, \"level_id\": {\"type\": \"SELECT\", \"sortNum\": 1, \"description\": \"等级ID\"}, \"gmt_create\": {\"type\": \"DATE\", \"sortNum\": 6, \"description\": \"创建时间\"}, \"level_name\": {\"type\": \"SELECT\", \"sortNum\": 2, \"description\": \"等级名称\"}, \"gmt_modified\": {\"type\": \"DATE\", \"sortNum\": 7, \"description\": \"修改时间\"}}, \"success\": {\"type\": \"Boolean\", \"description\": \"Boolean\"}, \"errorMsg\": {\"type\": \"String\"}, \"errorCode\": {\"type\": \"Integer\"}}"
                },
                "getOneUpdate": null,
                "create": {
                    "host": "",
                    "path": "/dbapi/runtime/yuntoo/app-619c8afe/149ec2c6ad9045e9a6a615d27810dec8/create",
                    "method": "POST",
                    "requestBody": "{\"remark\": {\"type\": \"TEXTAREA\", \"sortNum\": 4, \"description\": \"等级说明\"}, \"status\": {\"type\": \"RADIO\", \"sortNum\": 5, \"description\": \"状态\"}, \"discount\": {\"type\": \"NUMBER\", \"sortNum\": 3, \"description\": \"折扣比例\"}, \"level_id\": {\"type\": \"SELECT\", \"sortNum\": 1, \"description\": \"等级ID\"}, \"gmt_create\": {\"type\": \"DATE\", \"sortNum\": 6, \"description\": \"创建时间\"}, \"level_name\": {\"type\": \"SELECT\", \"sortNum\": 2, \"description\": \"等级名称\"}, \"gmt_modified\": {\"type\": \"DATE\", \"sortNum\": 7, \"description\": \"修改时间\"}}",
                    "responseBody": "{\"msg\": {\"type\": \"String\"}, \"success\": {\"type\": \"Long\", \"description\": \"Long\"}, \"errorMsg\": {\"type\": \"String\"}, \"errorCode\": {\"type\": \"Integer\"}}"
                },
                "update": {
                    "host": "",
                    "path": "/dbapi/runtime/yuntoo/app-619c8afe/149ec2c6ad9045e9a6a615d27810dec8/update",
                    "method": "POST",
                    "requestBody": "{\"remark\": {\"type\": \"TEXTAREA\", \"sortNum\": 4, \"description\": \"等级说明\"}, \"status\": {\"type\": \"RADIO\", \"sortNum\": 5, \"description\": \"状态\"}, \"discount\": {\"type\": \"NUMBER\", \"sortNum\": 3, \"description\": \"折扣比例\"}, \"level_id\": {\"type\": \"SELECT\", \"sortNum\": 1, \"description\": \"等级ID\"}, \"gmt_create\": {\"type\": \"DATE\", \"sortNum\": 6, \"description\": \"创建时间\"}, \"level_name\": {\"type\": \"SELECT\", \"sortNum\": 2, \"description\": \"等级名称\"}, \"gmt_modified\": {\"type\": \"DATE\", \"sortNum\": 7, \"description\": \"修改时间\"}}",
                    "responseBody": "{\"msg\": {\"type\": \"String\"}, \"success\": {\"type\": \"Boolean\", \"description\": \"Boolean\"}, \"errorMsg\": {\"type\": \"String\"}, \"errorCode\": {\"type\": \"Integer\"}}"
                },
                "delete": {
                    "host": "",
                    "path": "/dbapi/runtime/yuntoo/app-619c8afe/149ec2c6ad9045e9a6a615d27810dec8/delete",
                    "method": "POST",
                    "requestBody": "{\"id\": {\"type\": \"NUMBER\", \"description\": \"主键\"}}",
                    "responseBody": "{\"msg\": {\"type\": \"String\"}, \"success\": {\"type\": \"Boolean\", \"description\": \"Boolean\"}, \"errorMsg\": {\"type\": \"String\"}, \"errorCode\": {\"type\": \"Integer\"}}"
                },
                "getSelectOptions": {
                    "host": "",
                    "path": "/dbapi/runtime/yuntoo/app-619c8afe/149ec2c6ad9045e9a6a615d27810dec8/getSelectOptions",
                    "method": "POST",
                    "requestBody": "{\"code\": {\"type\": \"String\", \"description\": \"字段编码\"}}",
                    "responseBody": "{\"msg\": {\"type\": \"String\"}, \"data\": [{\"label\": {\"type\": \"String\", \"description\": \"枚举名称\"}, \"value\": {\"type\": \"String\", \"description\": \"枚举值\"}}], \"success\": {\"type\": \"Boolean\", \"description\": \"Boolean\"}, \"errorMsg\": {\"type\": \"String\"}, \"errorCode\": {\"type\": \"Integer\"}}"
                },
                "getUploadFileScrip": null,
                "getFileUrl": {
                    "host": "",
                    "path": "/dbapi/runtime/yuntoo/app-619c8afe/smartapi/common/getFileUrl",
                    "method": "GET",
                    "requestBody": "{\"key\":{\"description\":\"文件在oss上的key\",\"type\":\"string\"}}",
                    "responseBody": "{\"description\":\"文件的访问url\",\"type\":\"string\"}"
                },
                "createImport": null,
                "createExport": null,
                "taskInfo": null,
                "importTemplate": null
            },
            "existProcess": false,
            "version": 1,
            "oneSearchSwitch": null,
            "dbtableConfig": {
                "dbId": 10013,
                "tableName": "customer_level",
                "pkField": "level_id",
                "logicField": {
                    "fieldName": null,
                    "fieldType": null,
                    "extend": null
                },
                "allFields": "level_id,level_name,discount,remark,status,gmt_create,gmt_modified",
                "createTimeField": {
                    "fieldName": "gmt_create",
                    "fieldType": "TIMESTAMP",
                    "extend": null
                },
                "updateTimeField": {
                    "fieldName": "gmt_modified",
                    "fieldType": "TIMESTAMP",
                    "extend": null
                }
            },
            "oneSearchKey": null,
            "columnCodeListWithDeleted": [
                "level_id",
                "level_name",
                "discount",
                "remark",
                "status",
                "gmt_create",
                "gmt_modified"
            ],
            "formatRules": [],
            "validateRules": []
        },
        "deleted": 0,
        "siteModelDriveAssets": null,
        "siteAssets": {},
        "config": {
            "enablePublicAccess": false,
            "forcePublicAccess": false,
            "pubHost": "",
            "pubUrl": "",
            "submitType": "RESUBMIT",
            "redirectType": "DEFAULT_PAGE",
            "easyInsightDatasetIds": null,
            "easyInsightDatasetCodes": null,
            "uniqueColumnCodeList": null,
            "sameUser": null,
            "submitInvalidMsg": null,
            "aiGenerate": null,
            "datasetSource": null,
            "externalDatasourceIds": null,
            "voteConfig": null
        },
        "datasetVersion": 1,
        "flowId": null,
        "flowContent": null,
        "enableI18n": false,
        "i18nInfo": {
            "appId": null,
            "packId": null,
            "baseLang": null,
            "langs": null,
            "prePackVersion": null,
            "prodPackVersion": null,
            "checkBlock": null,
            "nonDomesticLogo": null
        },
        "type": "FTP",
        "businessDomain": "1",
        "relatedPageInfoList": [
            {
                "id": 71205,
                "type": "FORM",
                "code": "18b8ca1c28cc45bea190e5fa9ba24dfb",
                "deleted": false
            },
            {
                "id": 71206,
                "type": "DETAIL",
                "code": "",
                "deleted": false
            }
        ],
        "menuI18nKey": null,
        "flowPublishStatus": null
    },
    "params": null
}
```

 ### 2.1、客户等级列表页面：
 - 接口地址：
 https://api.yuntooai.com/dbapi/runtime/yuntoo/app-619c8afe/149ec2c6ad9045e9a6a615d27810dec8/getList
 - 接口返回的快照：
```typescript
{
    "success": true,
    "msg": "",
    "errorMsg": "",
    "errorCode": "0000",
    "params": null,
    "data": {
        "tableData": [
            {
                "gmt_create": 1319454603000,
                "amount": 711.00,
                "opportunity_step_label": [
                    {
                        "label": "第三次拜访（报价）",
                        "value": "第三次拜访（报价）"
                    }
                ],
                "description": "The repository database can be an existing MySQL, MariaDB, PostgreSQL, SQL Server, or Amazon RDS instance. Navicat Cloud could not connect and access your databases. By which it means, it could only store your connection settings, queries, model files, and virtual group; your database passwords and data (e.g. tables, views, etc) will not be stored to Navicat Cloud. In the Objects tab, you can use the List List, Detail Detail and ER Diagram ER Diagram buttons to change the object view. Navicat Cloud provides a cloud service for synchronizing connections, queries, model files and virtual group information from Navicat, other Navicat family members, different machines and different platforms. Navicat is a multi-connections Database Administration tool allowing you to connect to MySQL, Oracle, PostgreSQL, SQLite, SQL Server, MariaDB and/or MongoDB databases, making database administration to multiple kinds of database so easy. Navicat Cloud provides a cloud service for synchronizing connections, queries, model files and virtual group information from Navicat, other Navicat family members, different machines and different platforms. To successfully establish a new connection to local/remote server - no matter via SSL or SSH, set the database login information in the General tab. Navicat authorizes you to make connection to remote servers running on different platforms (i.e. Windows, macOS, Linux and UNIX), and supports PAM and GSSAPI authentication. If the plan doesn’t work, change the plan, but never the goal. All the Navicat Cloud objects are located under different projects. You can share the project to other Navicat Cloud accounts for collaboration. Secure Sockets Layer(SSL) is a protocol for transmitting private documents via the Internet. Navicat Data Modeler is a powerful and cost-effective database design tool which helps you build high-quality conceptual, logical and physical data models. To get a secure connection, the first thing you need to do is to install OpenSSL Library and download Database Source. Genius is an infinite capacity for taking pains. Navicat allows you to transfer data from one database and/or schema to another with detailed analytical process. The Main Window consists of several toolbars and panes for you to work on connections, database objects and advanced tools. To successfully establish a new connection to local/remote server - no matter via SSL or SSH, set the database login information in the General tab. Remember that failure is an event, not a person. Navicat Monitor is a safe, simple and agentless remote server monitoring tool that is packed with powerful features to make your monitoring effective as possible. Sometimes you win, sometimes you learn. It provides strong authentication and secure encrypted communications between two hosts, known as SSH Port Forwarding (Tunneling), over an insecure network. What you get by achieving your goals is not as important as what you become by achieving your goals. Anyone who has never made a mistake has never tried anything new. To get a secure connection, the first thing you need to do is to install OpenSSL Library and download Database Source. You can select any connections, objects or projects, and then select the corresponding buttons on the Information Pane. Navicat 15 has added support for the system-wide dark mode. Creativity is intelligence having fun. It collects process metrics such as CPU load, RAM usage, and a variety of other resources over SSH/SNMP. Export Wizard allows you to export data from tables, collections, views, or query results to any available formats. To connect to a database or schema, simply double-click it in the pane. To start working with your server in Navicat, you should first establish a connection or several connections using the Connection window. I destroy my enemies when I make them my friends. Optimism is the one quality more associated with success and happiness than any other. It is used while your ISPs do not allow direct connections, but allows establishing HTTP connections. To start working with your server in Navicat, you should first establish a connection or several connections using the Connection window. SSH serves to prevent such vulnerabilities and allows you to access a remote server's shell without compromising security. I may not have gone where I intended to go, but I think I have ended up where I needed to be. I will greet this day with love in my heart. A query is used to extract data from the database in a readable format according to the user's request. A man’s best friends are his ten fingers. I will greet this day with love in my heart. Navicat Monitor is a safe, simple and agentless remote server monitoring tool that is packed with powerful features to make your monitoring effective as possible. Such sessions are also susceptible to session hijacking, where a malicious user takes over your session once you have authenticated. Navicat Data Modeler is a powerful and cost-effective database design tool which helps you build high-quality conceptual, logical and physical data models. Monitored servers include MySQL, MariaDB and SQL Server, and compatible with cloud databases like Amazon RDS, Amazon Aurora, Oracle Cloud, Google Cloud and Microsoft Azure. There is no way to happiness. Happiness is the way. The On Startup feature allows you to control what tabs appear when you launch Navicat. Always keep your eyes open. Keep watching. Because whatever you see can inspire you. The first step is as good as half over. Remember that failure is an event, not a person. To successfully establish a new connection to local/remote server - no matter via SSL or SSH, set the database login information in the General tab. Such sessions are also susceptible to session hijacking, where a malicious user takes over your session once you have authenticated. Import Wizard allows you to import data to tables/collections from CSV, TXT, XML, DBF and more. Navicat provides a wide range advanced features, such as compelling code editing capabilities, smart code-completion, SQL formatting, and more. Navicat is a multi-connections Database Administration tool allowing you to connect to MySQL, Oracle, PostgreSQL, SQLite, SQL Server, MariaDB and/or MongoDB databases, making database administration to multiple kinds of database so easy. In the Objects tab, you can use the List List, Detail Detail and ER Diagram ER Diagram buttons to change the object view. To start working with your server in Navicat, you should first establish a connection or several connections using the Connection window. All journeys have secret destinations of which the traveler is unaware. In other words, Navicat provides the ability for data in different databases and/or schemas to be kept up-to-date so that each repository contains the same information. To start working with your server in Navicat, you should first establish a connection or several connections using the Connection window. There is no way to happiness. Happiness is the way. Typically, it is employed as an encrypted version of Telnet. How we spend our days is, of course, how we spend our lives. To successfully establish a new connection to local/remote server - no matter via SSL or SSH, set the database login information in the General tab. HTTP Tunneling is a method for connecting to a server that uses the same protocol (http://) and the same port (port 80) as a web server does. Navicat provides powerful tools for working with queries: Query Editor for editing the query text directly, and Query Builder, Find Builder or Aggregate Builder for building queries visually. Navicat provides powerful tools for working with queries: Query Editor for editing the query text directly, and Query Builder, Find Builder or Aggregate Builder for building queries visually.",
                "product_num": 230,
                "source": "展会",
                "gmt_modified": 1754567877000,
                "product_name": "产品V1",
                "status_label": [
                    {
                        "label": "已赢单",
                        "value": 2
                    }
                ],
                "opportunity_id": 6,
                "followup_time": 1603725479000,
                "expected_date": 1070553600000,
                "opportunity_name": "IT设备提供商",
                "competitor": "cursor",
                "source_label": [
                    {
                        "label": "展会",
                        "value": "展会"
                    }
                ],
                "employee_id": 27,
                "id": 6,
                "customer_id": 6,
                "opportunity_step": "第三次拜访（报价）",
                "status": 2
            },
            {
                "gmt_create": 1018916042000,
                "amount": 600.00,
                "opportunity_step_label": [
                    {
                        "label": "第二次拜访（正式拜访）",
                        "value": "第二次拜访（正式拜访）"
                    }
                ],
                "description": "After logged in the Navicat Cloud feature, the Navigation pane will be divided into Navicat Cloud and My Connections sections. Optimism is the one quality more associated with success and happiness than any other. The On Startup feature allows you to control what tabs appear when you launch Navicat. All journeys have secret destinations of which the traveler is unaware. Export Wizard allows you to export data from tables, collections, views, or query results to any available formats. Navicat Data Modeler is a powerful and cost-effective database design tool which helps you build high-quality conceptual, logical and physical data models. Anyone who has never made a mistake has never tried anything new. Navicat is a multi-connections Database Administration tool allowing you to connect to MySQL, Oracle, PostgreSQL, SQLite, SQL Server, MariaDB and/or MongoDB databases, making database administration to multiple kinds of database so easy. The repository database can be an existing MySQL, MariaDB, PostgreSQL, SQL Server, or Amazon RDS instance. To clear or reload various internal caches, flush tables, or acquire locks, control-click your connection in the Navigation pane and select Flush and choose the flush option. You must have the reload privilege to use this feature. After logged in the Navicat Cloud feature, the Navigation pane will be divided into Navicat Cloud and My Connections sections. A man is not old until regrets take the place of dreams. Creativity is intelligence having fun. The past has no power over the present moment. If the plan doesn’t work, change the plan, but never the goal. Monitored servers include MySQL, MariaDB and SQL Server, and compatible with cloud databases like Amazon RDS, Amazon Aurora, Oracle Cloud, Google Cloud and Microsoft Azure. I destroy my enemies when I make them my friends. You can select any connections, objects or projects, and then select the corresponding buttons on the Information Pane. To successfully establish a new connection to local/remote server - no matter via SSL or SSH, set the database login information in the General tab.",
                "product_num": 577,
                "source": "展会",
                "gmt_modified": 1754567750000,
                "product_name": "产品V5",
                "status_label": [
                    {
                        "label": "进行中",
                        "value": 1
                    }
                ],
                "opportunity_id": 4,
                "followup_time": 1411845943000,
                "expected_date": 1330444800000,
                "opportunity_name": "采购意向合同",
                "competitor": "cursor",
                "source_label": [
                    {
                        "label": "展会",
                        "value": "展会"
                    }
                ],
                "employee_id": 29,
                "id": 4,
                "customer_id": 4,
                "opportunity_step": "第二次拜访（正式拜访）",
                "status": 1
            },
            {
                "gmt_create": 1330154050000,
                "amount": 500.00,
                "opportunity_step_label": [
                    {
                        "label": "第二次拜访（正式拜访）",
                        "value": "第二次拜访（正式拜访）"
                    }
                ],
                "description": "The On Startup feature allows you to control what tabs appear when you launch Navicat. It collects process metrics such as CPU load, RAM usage, and a variety of other resources over SSH/SNMP. What you get by achieving your goals is not as important as what you become by achieving your goals. A comfort zone is a beautiful place, but nothing ever grows there. Secure Sockets Layer(SSL) is a protocol for transmitting private documents via the Internet. A man is not old until regrets take the place of dreams. Navicat 15 has added support for the system-wide dark mode. Navicat 15 has added support for the system-wide dark mode. Champions keep playing until they get it right. The first step is as good as half over. Actually it is just in an idea when feel oneself can achieve and cannot achieve. Navicat provides powerful tools for working with queries: Query Editor for editing the query text directly, and Query Builder, Find Builder or Aggregate Builder for building queries visually. With its well-designed Graphical User Interface(GUI), Navicat lets you quickly and easily create, organize, access and share information in a secure and easy way. The reason why a great man is great is that he resolves to be a great man. Secure Sockets Layer(SSL) is a protocol for transmitting private documents via the Internet. You can select any connections, objects or projects, and then select the corresponding buttons on the Information Pane. It can also manage cloud databases such as Amazon Redshift, Amazon RDS, Alibaba Cloud. Features in Navicat are sophisticated enough to provide professional developers for all their specific needs, yet easy to learn for users who are new to database server. It is used while your ISPs do not allow direct connections, but allows establishing HTTP connections. Secure Sockets Layer(SSL) is a protocol for transmitting private documents via the Internet. If you wait, all that happens is you get older. Navicat 15 has added support for the system-wide dark mode. Flexible settings enable you to set up a custom key for comparison and synchronization. The Main Window consists of several toolbars and panes for you to work on connections, database objects and advanced tools. The repository database can be an existing MySQL, MariaDB, PostgreSQL, SQL Server, or Amazon RDS instance. SQL Editor allows you to create and edit SQL text, prepare and execute selected queries. Export Wizard allows you to export data from tables, collections, views, or query results to any available formats. Champions keep playing until they get it right. If you wait, all that happens is you get older. Navicat Monitor can be installed on any local computer or virtual machine and does not require any software installation on the servers being monitored. Remember that failure is an event, not a person. To connect to a database or schema, simply double-click it in the pane. All the Navicat Cloud objects are located under different projects. You can share the project to other Navicat Cloud accounts for collaboration. Secure SHell (SSH) is a program to log in into another computer over a network, execute commands on a remote server, and move files from one machine to another. Anyone who has ever made anything of importance was disciplined. I destroy my enemies when I make them my friends. Anyone who has never made a mistake has never tried anything new. Sometimes you win, sometimes you learn. Actually it is just in an idea when feel oneself can achieve and cannot achieve. To successfully establish a new connection to local/remote server - no matter via SSL or SSH, set the database login information in the General tab. I destroy my enemies when I make them my friends. To successfully establish a new connection to local/remote server - no matter via SSL or SSH, set the database login information in the General tab. To open a query using an external editor, control-click it and select Open with External Editor. You can set the file path of an external editor in Preferences. Navicat Monitor can be installed on any local computer or virtual machine and does not require any software installation on the servers being monitored. Secure SHell (SSH) is a program to log in into another computer over a network, execute commands on a remote server, and move files from one machine to another. Anyone who has never made a mistake has never tried anything new. After comparing data, the window shows the number of records that will be inserted, updated or deleted in the target. After logged in the Navicat Cloud feature, the Navigation pane will be divided into Navicat Cloud and My Connections sections. The reason why a great man is great is that he resolves to be a great man. It can also manage cloud databases such as Amazon Redshift, Amazon RDS, Alibaba Cloud. Features in Navicat are sophisticated enough to provide professional developers for all their specific needs, yet easy to learn for users who are new to database server. Remember that failure is an event, not a person. Navicat Cloud could not connect and access your databases. By which it means, it could only store your connection settings, queries, model files, and virtual group; your database passwords and data (e.g. tables, views, etc) will not be stored to Navicat Cloud. There is no way to happiness. Happiness is the way. All the Navicat Cloud objects are located under different projects. You can share the project to other Navicat Cloud accounts for collaboration. After logged in the Navicat Cloud feature, the Navigation pane will be divided into Navicat Cloud and My Connections sections. To connect to a database or schema, simply double-click it in the pane. To get a secure connection, the first thing you need to do is to install OpenSSL Library and download Database Source. Navicat Cloud could not connect and access your databases. By which it means, it could only store your connection settings, queries, model files, and virtual group; your database passwords and data (e.g. tables, views, etc) will not be stored to Navicat Cloud. You must be the change you wish to see in the world. Navicat allows you to transfer data from one database and/or schema to another with detailed analytical process. Actually it is just in an idea when feel oneself can achieve and cannot achieve. Instead of wondering when your next vacation is, maybe you should set up a life you don’t need to escape from. A man’s best friends are his ten fingers. Anyone who has ever made anything of importance was disciplined. Navicat provides powerful tools for working with queries: Query Editor for editing the query text directly, and Query Builder, Find Builder or Aggregate Builder for building queries visually. Navicat Data Modeler is a powerful and cost-effective database design tool which helps you build high-quality conceptual, logical and physical data models. Navicat provides a wide range advanced features, such as compelling code editing capabilities, smart code-completion, SQL formatting, and more. To successfully establish a new connection to local/remote server - no matter via SSL or SSH, set the database login information in the General tab. The Navigation pane employs tree structure which allows you to take action upon the database and their objects through their pop-up menus quickly and easily. Flexible settings enable you to set up a custom key for comparison and synchronization. The On Startup feature allows you to control what tabs appear when you launch Navicat. Flexible settings enable you to set up a custom key for comparison and synchronization. The Main Window consists of several toolbars and panes for you to work on connections, database objects and advanced tools. Navicat is a multi-connections Database Administration tool allowing you to connect to MySQL, Oracle, PostgreSQL, SQLite, SQL Server, MariaDB and/or MongoDB databases, making database administration to multiple kinds of database so easy. If the Show objects under schema in navigation pane option is checked at the Preferences window, all database objects are also displayed in the pane. After comparing data, the window shows the number of records that will be inserted, updated or deleted in the target. To connect to a database or schema, simply double-click it in the pane. If opportunity doesn’t knock, build a door. Navicat Monitor is a safe, simple and agentless remote server monitoring tool that is packed with powerful features to make your monitoring effective as possible. Navicat provides powerful tools for working with queries: Query Editor for editing the query text directly, and Query Builder, Find Builder or Aggregate Builder for building queries visually. It collects process metrics such as CPU load, RAM usage, and a variety of other resources over SSH/SNMP. The Information Pane shows the detailed object information, project activities, the DDL of database objects, object dependencies, membership of users/roles and preview. SSH serves to prevent such vulnerabilities and allows you to access a remote server's shell without compromising security. Navicat Cloud could not connect and access your databases. By which it means, it could only store your connection settings, queries, model files, and virtual group; your database passwords and data (e.g. tables, views, etc) will not be stored to Navicat Cloud. Navicat Monitor can be installed on any local computer or virtual machine and does not require any software installation on the servers being monitored.",
                "product_num": 848,
                "source": "官网",
                "gmt_modified": 1754567747000,
                "product_name": "产品V4",
                "status_label": [
                    {
                        "label": "已输单",
                        "value": 3
                    }
                ],
                "opportunity_id": 3,
                "followup_time": 1435433641000,
                "expected_date": 1506700800000,
                "opportunity_name": "商务合作洽谈",
                "competitor": "cursor",
                "source_label": [
                    {
                        "label": "官网",
                        "value": "官网"
                    }
                ],
                "employee_id": 28,
                "id": 3,
                "customer_id": 3,
                "opportunity_step": "第二次拜访（正式拜访）",
                "status": 3
            },
            {
                "gmt_create": 973638915000,
                "amount": 600.00,
                "opportunity_step_label": [
                    {
                        "label": "第一次拜访（接触）",
                        "value": "第一次拜访（接触）"
                    }
                ],
                "description": "Navicat 15 has added support for the system-wide dark mode. In the middle of winter I at last discovered that there was in me an invincible summer. It is used while your ISPs do not allow direct connections, but allows establishing HTTP connections. A man is not old until regrets take the place of dreams. Navicat allows you to transfer data from one database and/or schema to another with detailed analytical process. I will greet this day with love in my heart. A comfort zone is a beautiful place, but nothing ever grows there. Navicat Monitor requires a repository to store alerts and metrics for historical analysis. Navicat Cloud could not connect and access your databases. By which it means, it could only store your connection settings, queries, model files, and virtual group; your database passwords and data (e.g. tables, views, etc) will not be stored to Navicat Cloud. In the Objects tab, you can use the List List, Detail Detail and ER Diagram ER Diagram buttons to change the object view. After comparing data, the window shows the number of records that will be inserted, updated or deleted in the target. To start working with your server in Navicat, you should first establish a connection or several connections using the Connection window. You will succeed because most people are lazy. Optimism is the one quality more associated with success and happiness than any other. Instead of wondering when your next vacation is, maybe you should set up a life you don’t need to escape from. The Main Window consists of several toolbars and panes for you to work on connections, database objects and advanced tools. With its well-designed Graphical User Interface(GUI), Navicat lets you quickly and easily create, organize, access and share information in a secure and easy way. Remember that failure is an event, not a person. If your Internet Service Provider (ISP) does not provide direct access to its server, Secure Tunneling Protocol (SSH) / HTTP is another solution. Typically, it is employed as an encrypted version of Telnet. With its well-designed Graphical User Interface(GUI), Navicat lets you quickly and easily create, organize, access and share information in a secure and easy way. If your Internet Service Provider (ISP) does not provide direct access to its server, Secure Tunneling Protocol (SSH) / HTTP is another solution. SQL Editor allows you to create and edit SQL text, prepare and execute selected queries. With its well-designed Graphical User Interface(GUI), Navicat lets you quickly and easily create, organize, access and share information in a secure and easy way. Remember that failure is an event, not a person. Remember that failure is an event, not a person. If it scares you, it might be a good thing to try. All the Navicat Cloud objects are located under different projects. You can share the project to other Navicat Cloud accounts for collaboration. It can also manage cloud databases such as Amazon Redshift, Amazon RDS, Alibaba Cloud. Features in Navicat are sophisticated enough to provide professional developers for all their specific needs, yet easy to learn for users who are new to database server. With its well-designed Graphical User Interface(GUI), Navicat lets you quickly and easily create, organize, access and share information in a secure and easy way. Optimism is the one quality more associated with success and happiness than any other. The reason why a great man is great is that he resolves to be a great man. It can also manage cloud databases such as Amazon Redshift, Amazon RDS, Alibaba Cloud. Features in Navicat are sophisticated enough to provide professional developers for all their specific needs, yet easy to learn for users who are new to database server. How we spend our days is, of course, how we spend our lives. If the plan doesn’t work, change the plan, but never the goal. The first step is as good as half over. Navicat Data Modeler enables you to build high-quality conceptual, logical and physical data models for a wide variety of audiences. The repository database can be an existing MySQL, MariaDB, PostgreSQL, SQL Server, or Amazon RDS instance. Secure SHell (SSH) is a program to log in into another computer over a network, execute commands on a remote server, and move files from one machine to another. Such sessions are also susceptible to session hijacking, where a malicious user takes over your session once you have authenticated. It can also manage cloud databases such as Amazon Redshift, Amazon RDS, Alibaba Cloud. Features in Navicat are sophisticated enough to provide professional developers for all their specific needs, yet easy to learn for users who are new to database server. After comparing data, the window shows the number of records that will be inserted, updated or deleted in the target. You can select any connections, objects or projects, and then select the corresponding buttons on the Information Pane. A query is used to extract data from the database in a readable format according to the user's request. I may not have gone where I intended to go, but I think I have ended up where I needed to be. Navicat allows you to transfer data from one database and/or schema to another with detailed analytical process. In the middle of winter I at last discovered that there was in me an invincible summer. Such sessions are also susceptible to session hijacking, where a malicious user takes over your session once you have authenticated. You will succeed because most people are lazy. You can select any connections, objects or projects, and then select the corresponding buttons on the Information Pane. To clear or reload various internal caches, flush tables, or acquire locks, control-click your connection in the Navigation pane and select Flush and choose the flush option. You must have the reload privilege to use this feature. Navicat allows you to transfer data from one database and/or schema to another with detailed analytical process. It provides strong authentication and secure encrypted communications between two hosts, known as SSH Port Forwarding (Tunneling), over an insecure network. Difficult circumstances serve as a textbook of life for people. What you get by achieving your goals is not as important as what you become by achieving your goals. The Information Pane shows the detailed object information, project activities, the DDL of database objects, object dependencies, membership of users/roles and preview. The first step is as good as half over. In the middle of winter I at last discovered that there was in me an invincible summer. Champions keep playing until they get it right. Navicat authorizes you to make connection to remote servers running on different platforms (i.e. Windows, macOS, Linux and UNIX), and supports PAM and GSSAPI authentication. If your Internet Service Provider (ISP) does not provide direct access to its server, Secure Tunneling Protocol (SSH) / HTTP is another solution. If you wait, all that happens is you get older. SQL Editor allows you to create and edit SQL text, prepare and execute selected queries. In the Objects tab, you can use the List List, Detail Detail and ER Diagram ER Diagram buttons to change the object view. Anyone who has never made a mistake has never tried anything new. With its well-designed Graphical User Interface(GUI), Navicat lets you quickly and easily create, organize, access and share information in a secure and easy way. To open a query using an external editor, control-click it and select Open with External Editor. You can set the file path of an external editor in Preferences. All the Navicat Cloud objects are located under different projects. You can share the project to other Navicat Cloud accounts for collaboration. A man’s best friends are his ten fingers. Secure Sockets Layer(SSL) is a protocol for transmitting private documents via the Internet. Navicat 15 has added support for the system-wide dark mode. If you wait, all that happens is you get older. I will greet this day with love in my heart. To open a query using an external editor, control-click it and select Open with External Editor. You can set the file path of an external editor in Preferences. SQL Editor allows you to create and edit SQL text, prepare and execute selected queries. A comfort zone is a beautiful place, but nothing ever grows there. If you wait, all that happens is you get older. Difficult circumstances serve as a textbook of life for people. Navicat Data Modeler is a powerful and cost-effective database design tool which helps you build high-quality conceptual, logical and physical data models. After logged in the Navicat Cloud feature, the Navigation pane will be divided into Navicat Cloud and My Connections sections. Import Wizard allows you to import data to tables/collections from CSV, TXT, XML, DBF and more. Navicat provides powerful tools for working with queries: Query Editor for editing the query text directly, and Query Builder, Find Builder or Aggregate Builder for building queries visually. Secure SHell (SSH) is a program to log in into another computer over a network, execute commands on a remote server, and move files from one machine to another. If you wait, all that happens is you get older. After comparing data, the window shows the number of records that will be inserted, updated or deleted in the target. Actually it is just in an idea when feel oneself can achieve and cannot achieve. The Synchronize to Database function will give you a full picture of all database differences. To open a query using an external editor, control-click it and select Open with External Editor. You can set the file path of an external editor in Preferences.",
                "product_num": 631,
                "source": "网上销售",
                "gmt_modified": 1754567744000,
                "product_name": "产品V3",
                "status_label": [
                    {
                        "label": "已赢单",
                        "value": 2
                    }
                ],
                "opportunity_id": 2,
                "followup_time": 1419370960000,
                "expected_date": 1744992000000,
                "opportunity_name": "供应链合作",
                "competitor": "cursor",
                "source_label": [
                    {
                        "label": "网上销售",
                        "value": "网上销售"
                    }
                ],
                "employee_id": 28,
                "id": 2,
                "customer_id": 2,
                "opportunity_step": "第一次拜访（接触）",
                "status": 2
            },
            {
                "gmt_create": 1734520365000,
                "amount": 500.00,
                "opportunity_step_label": [
                    {
                        "label": "第一次拜访（接触）",
                        "value": "第一次拜访（接触）"
                    }
                ],
                "description": "To get a secure connection, the first thing you need to do is to install OpenSSL Library and download Database Source. With its well-designed Graphical User Interface(GUI), Navicat lets you quickly and easily create, organize, access and share information in a secure and easy way. Navicat authorizes you to make connection to remote servers running on different platforms (i.e. Windows, macOS, Linux and UNIX), and supports PAM and GSSAPI authentication. A man is not old until regrets take the place of dreams. It provides strong authentication and secure encrypted communications between two hosts, known as SSH Port Forwarding (Tunneling), over an insecure network. If you wait, all that happens is you get older. Champions keep playing until they get it right. The On Startup feature allows you to control what tabs appear when you launch Navicat. It wasn’t raining when Noah built the ark. The Main Window consists of several toolbars and panes for you to work on connections, database objects and advanced tools. What you get by achieving your goals is not as important as what you become by achieving your goals. Typically, it is employed as an encrypted version of Telnet. Typically, it is employed as an encrypted version of Telnet. Import Wizard allows you to import data to tables/collections from CSV, TXT, XML, DBF and more. If your Internet Service Provider (ISP) does not provide direct access to its server, Secure Tunneling Protocol (SSH) / HTTP is another solution. All journeys have secret destinations of which the traveler is unaware. Creativity is intelligence having fun. A man is not old until regrets take the place of dreams. SSH serves to prevent such vulnerabilities and allows you to access a remote server's shell without compromising security. A man’s best friends are his ten fingers. Navicat authorizes you to make connection to remote servers running on different platforms (i.e. Windows, macOS, Linux and UNIX), and supports PAM and GSSAPI authentication. Navicat Monitor requires a repository to store alerts and metrics for historical analysis. The Navigation pane employs tree structure which allows you to take action upon the database and their objects through their pop-up menus quickly and easily. Genius is an infinite capacity for taking pains. Champions keep playing until they get it right. A man is not old until regrets take the place of dreams. Navicat Data Modeler is a powerful and cost-effective database design tool which helps you build high-quality conceptual, logical and physical data models. Navicat 15 has added support for the system-wide dark mode. After logged in the Navicat Cloud feature, the Navigation pane will be divided into Navicat Cloud and My Connections sections. Navicat Monitor requires a repository to store alerts and metrics for historical analysis. Anyone who has never made a mistake has never tried anything new. A man is not old until regrets take the place of dreams. Champions keep playing until they get it right. If the Show objects under schema in navigation pane option is checked at the Preferences window, all database objects are also displayed in the pane. Navicat Cloud could not connect and access your databases. By which it means, it could only store your connection settings, queries, model files, and virtual group; your database passwords and data (e.g. tables, views, etc) will not be stored to Navicat Cloud. I may not have gone where I intended to go, but I think I have ended up where I needed to be. Creativity is intelligence having fun. Anyone who has never made a mistake has never tried anything new. To start working with your server in Navicat, you should first establish a connection or several connections using the Connection window. You must be the change you wish to see in the world. It wasn’t raining when Noah built the ark. If the Show objects under schema in navigation pane option is checked at the Preferences window, all database objects are also displayed in the pane. Export Wizard allows you to export data from tables, collections, views, or query results to any available formats. In the Objects tab, you can use the List List, Detail Detail and ER Diagram ER Diagram buttons to change the object view. All journeys have secret destinations of which the traveler is unaware. There is no way to happiness. Happiness is the way. A query is used to extract data from the database in a readable format according to the user's request. It provides strong authentication and secure encrypted communications between two hosts, known as SSH Port Forwarding (Tunneling), over an insecure network. In a Telnet session, all communications, including username and password, are transmitted in plain-text, allowing anyone to listen-in on your session and steal passwords and other information. In the Objects tab, you can use the List List, Detail Detail and ER Diagram ER Diagram buttons to change the object view. Secure Sockets Layer(SSL) is a protocol for transmitting private documents via the Internet. Navicat Data Modeler enables you to build high-quality conceptual, logical and physical data models for a wide variety of audiences. To clear or reload various internal caches, flush tables, or acquire locks, control-click your connection in the Navigation pane and select Flush and choose the flush option. You must have the reload privilege to use this feature. HTTP Tunneling is a method for connecting to a server that uses the same protocol (http://) and the same port (port 80) as a web server does.",
                "product_num": 964,
                "source": "电话销售",
                "gmt_modified": 1754567741000,
                "product_name": "产品V1",
                "status_label": [
                    {
                        "label": "进行中",
                        "value": 1
                    }
                ],
                "opportunity_id": 1,
                "followup_time": 1631068650000,
                "expected_date": 1163865600000,
                "opportunity_name": "采购意向合同",
                "competitor": "cursor",
                "source_label": [
                    {
                        "label": "电话销售",
                        "value": "电话销售"
                    }
                ],
                "employee_id": 27,
                "id": 1,
                "customer_id": 1,
                "opportunity_step": "第一次拜访（接触）",
                "status": 1
            }
        ],
        "paging": {
            "currentPage": 1,
            "totalCount": 5,
            "pageSize": 10
        },
        "tableColumns": [
            {
                "dataIndex": "id",
                "title": "商机ID",
                "name": "商机ID",
                "type": "NUMBER",
                "description": "商机ID",
                "sortNum": 1,
                "id": 659459,
                "code": "id",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":false,\"pkField\":true,\"modifyDate\":false,\"autoIncrement\":true,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"系统自动生成\",\"maxLength\":20,\"createDate\":false,\"tooltip\":\"商机的唯一系统标识，用于内部关联和数据管理\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "customer_id",
                "title": "客户ID",
                "name": "客户ID",
                "type": "NUMBER",
                "description": "客户ID",
                "sortNum": 2,
                "id": 659460,
                "code": "customer_id",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入客户ID，如：C1001\",\"maxLength\":19,\"createDate\":false,\"tooltip\":\"关联客户的唯一标识，用于建立商机与客户的关联关系\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "opportunity_name",
                "title": "商机名称",
                "name": "商机名称",
                "type": "TEXT",
                "description": "商机名称",
                "sortNum": 3,
                "id": 659461,
                "code": "opportunity_name",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入商机名称，如：XX公司保险采购项目\",\"maxLength\":100,\"createDate\":false,\"tooltip\":\"商机的名称，建议包含客户名称和项目类型，便于快速识别\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "amount",
                "title": "预计金额",
                "name": "预计金额",
                "type": "NUMBER",
                "description": "预计金额",
                "sortNum": 4,
                "id": 659462,
                "code": "amount",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入预计金额，如：500000\",\"maxLength\":12,\"createDate\":false,\"tooltip\":\"预计成交金额，用于销售预测和业绩统计\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "employee_id",
                "title": "负责人ID",
                "name": "负责人ID",
                "type": "NUMBER",
                "description": "负责人ID，关联销售员工表的employee_id",
                "sortNum": 5,
                "id": 659463,
                "code": "employee_id",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入负责人ID，如：E2001\",\"maxLength\":19,\"createDate\":false,\"tooltip\":\"负责该商机的销售员工ID，用于分配和跟进管理\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "expected_date",
                "title": "预计成交日期",
                "name": "预计成交日期",
                "type": "DATE",
                "description": "预计成交日期",
                "sortNum": 6,
                "id": 659464,
                "code": "expected_date",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请选择预计成交日期\",\"maxLength\":10,\"createDate\":false,\"tooltip\":\"预计的成交时间，用于销售计划和跟进提醒\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "source",
                "title": "商机来源",
                "name": "商机来源",
                "type": "RADIO",
                "description": "商机来源，（可选范围：电话销售、网上销售、官网、展会、他人介绍、社交媒体、其他）",
                "sortNum": 7,
                "id": 659465,
                "code": "source",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":[{\"label\":\"电话销售\",\"value\":\"电话销售\"},{\"label\":\"网上销售\",\"value\":\"网上销售\"},{\"label\":\"官网\",\"value\":\"官网\"},{\"label\":\"展会\",\"value\":\"展会\"},{\"label\":\"他人介绍\",\"value\":\"他人介绍\"},{\"label\":\"社交媒体\",\"value\":\"社交媒体\"},{\"label\":\"其他\",\"value\":\"其他\"}],\"disabled\":false,\"placeholder\":\"请选择商机来源\",\"maxLength\":32,\"createDate\":false,\"tooltip\":\"商机的获取渠道，用于分析市场推广效果和渠道质量\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "opportunity_step",
                "title": "商机阶段",
                "name": "商机阶段",
                "type": "RADIO",
                "description": "商机阶段，(可选范围：第一次拜访（接触），第二次拜访（正式拜访）、第三次拜访（报价）、第四次拜访（签单）、丢单、其他)",
                "sortNum": 8,
                "id": 659466,
                "code": "opportunity_step",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":[{\"label\":\"第一次拜访（接触）\",\"value\":\"第一次拜访（接触）\"},{\"label\":\"第二次拜访（正式拜访）\",\"value\":\"第二次拜访（正式拜访）\"},{\"label\":\"第三次拜访（报价）\",\"value\":\"第三次拜访（报价）\"},{\"label\":\"第四次拜访（签单）\",\"value\":\"第四次拜访（签单）\"},{\"label\":\"丢单\",\"value\":\"丢单\"},{\"label\":\"其他\",\"value\":\"其他\"}],\"disabled\":false,\"placeholder\":\"请选择商机阶段\",\"maxLength\":32,\"createDate\":false,\"tooltip\":\"商机当前所处的阶段，用于销售流程管理和预测\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "product_name",
                "title": "产品名称",
                "name": "产品名称",
                "type": "TEXT",
                "description": "产品名称",
                "sortNum": 9,
                "id": 659467,
                "code": "product_name",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入产品名称，如：企业财产险标准版\",\"maxLength\":64,\"createDate\":false,\"tooltip\":\"涉及的产品名称，用于产品销售统计和分析\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "product_num",
                "title": "产品数量",
                "name": "产品数量",
                "type": "NUMBER",
                "description": "产品数量",
                "sortNum": 10,
                "id": 659468,
                "code": "product_num",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入产品数量，如：10\",\"maxLength\":10,\"createDate\":false,\"tooltip\":\"涉及的产品数量，用于销售量统计和库存准备\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "description",
                "title": "商机描述",
                "name": "商机描述",
                "type": "TEXTAREA",
                "description": "商机描述",
                "sortNum": 11,
                "id": 659469,
                "code": "description",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入商机描述，如：XX公司计划采购10份企业财产险，预计本月内成交\",\"maxLength\":65535,\"createDate\":false,\"tooltip\":\"商机的详细描述信息，包括客户需求、特殊要求等\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": false,
                "deleted": false
            },
            {
                "dataIndex": "competitor",
                "title": "竞争对手",
                "name": "竞争对手",
                "type": "TEXT",
                "description": "竞争对手",
                "sortNum": 12,
                "id": 659470,
                "code": "competitor",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入竞争对手名称，如：XX保险公司\",\"maxLength\":128,\"createDate\":false,\"tooltip\":\"当前竞争该商机的其他公司，用于竞争分析\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "followup_time",
                "title": "最后跟进时间",
                "name": "最后跟进时间",
                "type": "DATE",
                "description": "最后跟进时间",
                "sortNum": 13,
                "id": 659471,
                "code": "followup_time",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请选择最后跟进时间\",\"maxLength\":19,\"createDate\":false,\"tooltip\":\"最后一次跟进的时间，用于跟进频率管理和提醒\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "status",
                "title": "状态",
                "name": "状态",
                "type": "RADIO",
                "description": "状态，(可选范围：1:进行中,2:已赢单,3:已输单)",
                "sortNum": 14,
                "id": 659472,
                "code": "status",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":[{\"label\":\"进行中\",\"value\":1},{\"label\":\"已赢单\",\"value\":2},{\"label\":\"已输单\",\"value\":3}],\"disabled\":false,\"placeholder\":\"请选择状态\",\"maxLength\":3,\"createDate\":false,\"tooltip\":\"商机的当前状态，用于销售漏斗管理和业绩预测\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "gmt_create",
                "title": "创建时间",
                "name": "创建时间",
                "type": "DATE",
                "description": "创建时间",
                "sortNum": 15,
                "id": 659473,
                "code": "gmt_create",
                "extend": "{\"systemRetain\":true,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":true,\"placeholder\":\"系统自动维护\",\"maxLength\":19,\"createDate\":true,\"tooltip\":\"商机记录的创建时间，由系统自动生成和维护\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "gmt_modified",
                "title": "修改时间",
                "name": "修改时间",
                "type": "DATE",
                "description": "修改时间",
                "sortNum": 16,
                "id": 659474,
                "code": "gmt_modified",
                "extend": "{\"systemRetain\":true,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":true,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":true,\"placeholder\":\"系统自动维护\",\"maxLength\":19,\"createDate\":false,\"tooltip\":\"商机记录的最后修改时间，由系统自动更新\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            }
        ]
    },
    "failed": false
}
```


 ### 2.2、商业机会列表
 - 接口地址
 https://api.yuntooai.com/dbapi/runtime/yuntoo/app-619c8afe/b706fce73c6f4e19a038fa290d8815fe/getList

- 接口返回的快照：
```typescript
{
    "success": true,
    "msg": "",
    "errorMsg": "",
    "errorCode": "0000",
    "params": null,
    "data": {
        "tableData": [
            {
                "gmt_create": 1319454603000,
                "amount": 711.00,
                "opportunity_step_label": [
                    {
                        "label": "第三次拜访（报价）",
                        "value": "第三次拜访（报价）"
                    }
                ],
                "description": "The repository database can be an existing MySQL, MariaDB, PostgreSQL, SQL Server, or Amazon RDS instance. Navicat Cloud could not connect and access your databases. By which it means, it could only store your connection settings, queries, model files, and virtual group; your database passwords and data (e.g. tables, views, etc) will not be stored to Navicat Cloud. In the Objects tab, you can use the List List, Detail Detail and ER Diagram ER Diagram buttons to change the object view. Navicat Cloud provides a cloud service for synchronizing connections, queries, model files and virtual group information from Navicat, other Navicat family members, different machines and different platforms. Navicat is a multi-connections Database Administration tool allowing you to connect to MySQL, Oracle, PostgreSQL, SQLite, SQL Server, MariaDB and/or MongoDB databases, making database administration to multiple kinds of database so easy. Navicat Cloud provides a cloud service for synchronizing connections, queries, model files and virtual group information from Navicat, other Navicat family members, different machines and different platforms. To successfully establish a new connection to local/remote server - no matter via SSL or SSH, set the database login information in the General tab. Navicat authorizes you to make connection to remote servers running on different platforms (i.e. Windows, macOS, Linux and UNIX), and supports PAM and GSSAPI authentication. If the plan doesn’t work, change the plan, but never the goal. All the Navicat Cloud objects are located under different projects. You can share the project to other Navicat Cloud accounts for collaboration. Secure Sockets Layer(SSL) is a protocol for transmitting private documents via the Internet. Navicat Data Modeler is a powerful and cost-effective database design tool which helps you build high-quality conceptual, logical and physical data models. To get a secure connection, the first thing you need to do is to install OpenSSL Library and download Database Source. Genius is an infinite capacity for taking pains. Navicat allows you to transfer data from one database and/or schema to another with detailed analytical process. The Main Window consists of several toolbars and panes for you to work on connections, database objects and advanced tools. To successfully establish a new connection to local/remote server - no matter via SSL or SSH, set the database login information in the General tab. Remember that failure is an event, not a person. Navicat Monitor is a safe, simple and agentless remote server monitoring tool that is packed with powerful features to make your monitoring effective as possible. Sometimes you win, sometimes you learn. It provides strong authentication and secure encrypted communications between two hosts, known as SSH Port Forwarding (Tunneling), over an insecure network. What you get by achieving your goals is not as important as what you become by achieving your goals. Anyone who has never made a mistake has never tried anything new. To get a secure connection, the first thing you need to do is to install OpenSSL Library and download Database Source. You can select any connections, objects or projects, and then select the corresponding buttons on the Information Pane. Navicat 15 has added support for the system-wide dark mode. Creativity is intelligence having fun. It collects process metrics such as CPU load, RAM usage, and a variety of other resources over SSH/SNMP. Export Wizard allows you to export data from tables, collections, views, or query results to any available formats. To connect to a database or schema, simply double-click it in the pane. To start working with your server in Navicat, you should first establish a connection or several connections using the Connection window. I destroy my enemies when I make them my friends. Optimism is the one quality more associated with success and happiness than any other. It is used while your ISPs do not allow direct connections, but allows establishing HTTP connections. To start working with your server in Navicat, you should first establish a connection or several connections using the Connection window. SSH serves to prevent such vulnerabilities and allows you to access a remote server's shell without compromising security. I may not have gone where I intended to go, but I think I have ended up where I needed to be. I will greet this day with love in my heart. A query is used to extract data from the database in a readable format according to the user's request. A man’s best friends are his ten fingers. I will greet this day with love in my heart. Navicat Monitor is a safe, simple and agentless remote server monitoring tool that is packed with powerful features to make your monitoring effective as possible. Such sessions are also susceptible to session hijacking, where a malicious user takes over your session once you have authenticated. Navicat Data Modeler is a powerful and cost-effective database design tool which helps you build high-quality conceptual, logical and physical data models. Monitored servers include MySQL, MariaDB and SQL Server, and compatible with cloud databases like Amazon RDS, Amazon Aurora, Oracle Cloud, Google Cloud and Microsoft Azure. There is no way to happiness. Happiness is the way. The On Startup feature allows you to control what tabs appear when you launch Navicat. Always keep your eyes open. Keep watching. Because whatever you see can inspire you. The first step is as good as half over. Remember that failure is an event, not a person. To successfully establish a new connection to local/remote server - no matter via SSL or SSH, set the database login information in the General tab. Such sessions are also susceptible to session hijacking, where a malicious user takes over your session once you have authenticated. Import Wizard allows you to import data to tables/collections from CSV, TXT, XML, DBF and more. Navicat provides a wide range advanced features, such as compelling code editing capabilities, smart code-completion, SQL formatting, and more. Navicat is a multi-connections Database Administration tool allowing you to connect to MySQL, Oracle, PostgreSQL, SQLite, SQL Server, MariaDB and/or MongoDB databases, making database administration to multiple kinds of database so easy. In the Objects tab, you can use the List List, Detail Detail and ER Diagram ER Diagram buttons to change the object view. To start working with your server in Navicat, you should first establish a connection or several connections using the Connection window. All journeys have secret destinations of which the traveler is unaware. In other words, Navicat provides the ability for data in different databases and/or schemas to be kept up-to-date so that each repository contains the same information. To start working with your server in Navicat, you should first establish a connection or several connections using the Connection window. There is no way to happiness. Happiness is the way. Typically, it is employed as an encrypted version of Telnet. How we spend our days is, of course, how we spend our lives. To successfully establish a new connection to local/remote server - no matter via SSL or SSH, set the database login information in the General tab. HTTP Tunneling is a method for connecting to a server that uses the same protocol (http://) and the same port (port 80) as a web server does. Navicat provides powerful tools for working with queries: Query Editor for editing the query text directly, and Query Builder, Find Builder or Aggregate Builder for building queries visually. Navicat provides powerful tools for working with queries: Query Editor for editing the query text directly, and Query Builder, Find Builder or Aggregate Builder for building queries visually.",
                "product_num": 230,
                "source": "展会",
                "gmt_modified": 1754567877000,
                "product_name": "产品V1",
                "status_label": [
                    {
                        "label": "已赢单",
                        "value": 2
                    }
                ],
                "opportunity_id": 6,
                "followup_time": 1603725479000,
                "expected_date": 1070553600000,
                "opportunity_name": "IT设备提供商",
                "competitor": "cursor",
                "source_label": [
                    {
                        "label": "展会",
                        "value": "展会"
                    }
                ],
                "employee_id": 27,
                "id": 6,
                "customer_id": 6,
                "opportunity_step": "第三次拜访（报价）",
                "status": 2
            },
            {
                "gmt_create": 1018916042000,
                "amount": 600.00,
                "opportunity_step_label": [
                    {
                        "label": "第二次拜访（正式拜访）",
                        "value": "第二次拜访（正式拜访）"
                    }
                ],
                "description": "After logged in the Navicat Cloud feature, the Navigation pane will be divided into Navicat Cloud and My Connections sections. Optimism is the one quality more associated with success and happiness than any other. The On Startup feature allows you to control what tabs appear when you launch Navicat. All journeys have secret destinations of which the traveler is unaware. Export Wizard allows you to export data from tables, collections, views, or query results to any available formats. Navicat Data Modeler is a powerful and cost-effective database design tool which helps you build high-quality conceptual, logical and physical data models. Anyone who has never made a mistake has never tried anything new. Navicat is a multi-connections Database Administration tool allowing you to connect to MySQL, Oracle, PostgreSQL, SQLite, SQL Server, MariaDB and/or MongoDB databases, making database administration to multiple kinds of database so easy. The repository database can be an existing MySQL, MariaDB, PostgreSQL, SQL Server, or Amazon RDS instance. To clear or reload various internal caches, flush tables, or acquire locks, control-click your connection in the Navigation pane and select Flush and choose the flush option. You must have the reload privilege to use this feature. After logged in the Navicat Cloud feature, the Navigation pane will be divided into Navicat Cloud and My Connections sections. A man is not old until regrets take the place of dreams. Creativity is intelligence having fun. The past has no power over the present moment. If the plan doesn’t work, change the plan, but never the goal. Monitored servers include MySQL, MariaDB and SQL Server, and compatible with cloud databases like Amazon RDS, Amazon Aurora, Oracle Cloud, Google Cloud and Microsoft Azure. I destroy my enemies when I make them my friends. You can select any connections, objects or projects, and then select the corresponding buttons on the Information Pane. To successfully establish a new connection to local/remote server - no matter via SSL or SSH, set the database login information in the General tab.",
                "product_num": 577,
                "source": "展会",
                "gmt_modified": 1754567750000,
                "product_name": "产品V5",
                "status_label": [
                    {
                        "label": "进行中",
                        "value": 1
                    }
                ],
                "opportunity_id": 4,
                "followup_time": 1411845943000,
                "expected_date": 1330444800000,
                "opportunity_name": "采购意向合同",
                "competitor": "cursor",
                "source_label": [
                    {
                        "label": "展会",
                        "value": "展会"
                    }
                ],
                "employee_id": 29,
                "id": 4,
                "customer_id": 4,
                "opportunity_step": "第二次拜访（正式拜访）",
                "status": 1
            },
            {
                "gmt_create": 1330154050000,
                "amount": 500.00,
                "opportunity_step_label": [
                    {
                        "label": "第二次拜访（正式拜访）",
                        "value": "第二次拜访（正式拜访）"
                    }
                ],
                "description": "The On Startup feature allows you to control what tabs appear when you launch Navicat. It collects process metrics such as CPU load, RAM usage, and a variety of other resources over SSH/SNMP. What you get by achieving your goals is not as important as what you become by achieving your goals. A comfort zone is a beautiful place, but nothing ever grows there. Secure Sockets Layer(SSL) is a protocol for transmitting private documents via the Internet. A man is not old until regrets take the place of dreams. Navicat 15 has added support for the system-wide dark mode. Navicat 15 has added support for the system-wide dark mode. Champions keep playing until they get it right. The first step is as good as half over. Actually it is just in an idea when feel oneself can achieve and cannot achieve. Navicat provides powerful tools for working with queries: Query Editor for editing the query text directly, and Query Builder, Find Builder or Aggregate Builder for building queries visually. With its well-designed Graphical User Interface(GUI), Navicat lets you quickly and easily create, organize, access and share information in a secure and easy way. The reason why a great man is great is that he resolves to be a great man. Secure Sockets Layer(SSL) is a protocol for transmitting private documents via the Internet. You can select any connections, objects or projects, and then select the corresponding buttons on the Information Pane. It can also manage cloud databases such as Amazon Redshift, Amazon RDS, Alibaba Cloud. Features in Navicat are sophisticated enough to provide professional developers for all their specific needs, yet easy to learn for users who are new to database server. It is used while your ISPs do not allow direct connections, but allows establishing HTTP connections. Secure Sockets Layer(SSL) is a protocol for transmitting private documents via the Internet. If you wait, all that happens is you get older. Navicat 15 has added support for the system-wide dark mode. Flexible settings enable you to set up a custom key for comparison and synchronization. The Main Window consists of several toolbars and panes for you to work on connections, database objects and advanced tools. The repository database can be an existing MySQL, MariaDB, PostgreSQL, SQL Server, or Amazon RDS instance. SQL Editor allows you to create and edit SQL text, prepare and execute selected queries. Export Wizard allows you to export data from tables, collections, views, or query results to any available formats. Champions keep playing until they get it right. If you wait, all that happens is you get older. Navicat Monitor can be installed on any local computer or virtual machine and does not require any software installation on the servers being monitored. Remember that failure is an event, not a person. To connect to a database or schema, simply double-click it in the pane. All the Navicat Cloud objects are located under different projects. You can share the project to other Navicat Cloud accounts for collaboration. Secure SHell (SSH) is a program to log in into another computer over a network, execute commands on a remote server, and move files from one machine to another. Anyone who has ever made anything of importance was disciplined. I destroy my enemies when I make them my friends. Anyone who has never made a mistake has never tried anything new. Sometimes you win, sometimes you learn. Actually it is just in an idea when feel oneself can achieve and cannot achieve. To successfully establish a new connection to local/remote server - no matter via SSL or SSH, set the database login information in the General tab. I destroy my enemies when I make them my friends. To successfully establish a new connection to local/remote server - no matter via SSL or SSH, set the database login information in the General tab. To open a query using an external editor, control-click it and select Open with External Editor. You can set the file path of an external editor in Preferences. Navicat Monitor can be installed on any local computer or virtual machine and does not require any software installation on the servers being monitored. Secure SHell (SSH) is a program to log in into another computer over a network, execute commands on a remote server, and move files from one machine to another. Anyone who has never made a mistake has never tried anything new. After comparing data, the window shows the number of records that will be inserted, updated or deleted in the target. After logged in the Navicat Cloud feature, the Navigation pane will be divided into Navicat Cloud and My Connections sections. The reason why a great man is great is that he resolves to be a great man. It can also manage cloud databases such as Amazon Redshift, Amazon RDS, Alibaba Cloud. Features in Navicat are sophisticated enough to provide professional developers for all their specific needs, yet easy to learn for users who are new to database server. Remember that failure is an event, not a person. Navicat Cloud could not connect and access your databases. By which it means, it could only store your connection settings, queries, model files, and virtual group; your database passwords and data (e.g. tables, views, etc) will not be stored to Navicat Cloud. There is no way to happiness. Happiness is the way. All the Navicat Cloud objects are located under different projects. You can share the project to other Navicat Cloud accounts for collaboration. After logged in the Navicat Cloud feature, the Navigation pane will be divided into Navicat Cloud and My Connections sections. To connect to a database or schema, simply double-click it in the pane. To get a secure connection, the first thing you need to do is to install OpenSSL Library and download Database Source. Navicat Cloud could not connect and access your databases. By which it means, it could only store your connection settings, queries, model files, and virtual group; your database passwords and data (e.g. tables, views, etc) will not be stored to Navicat Cloud. You must be the change you wish to see in the world. Navicat allows you to transfer data from one database and/or schema to another with detailed analytical process. Actually it is just in an idea when feel oneself can achieve and cannot achieve. Instead of wondering when your next vacation is, maybe you should set up a life you don’t need to escape from. A man’s best friends are his ten fingers. Anyone who has ever made anything of importance was disciplined. Navicat provides powerful tools for working with queries: Query Editor for editing the query text directly, and Query Builder, Find Builder or Aggregate Builder for building queries visually. Navicat Data Modeler is a powerful and cost-effective database design tool which helps you build high-quality conceptual, logical and physical data models. Navicat provides a wide range advanced features, such as compelling code editing capabilities, smart code-completion, SQL formatting, and more. To successfully establish a new connection to local/remote server - no matter via SSL or SSH, set the database login information in the General tab. The Navigation pane employs tree structure which allows you to take action upon the database and their objects through their pop-up menus quickly and easily. Flexible settings enable you to set up a custom key for comparison and synchronization. The On Startup feature allows you to control what tabs appear when you launch Navicat. Flexible settings enable you to set up a custom key for comparison and synchronization. The Main Window consists of several toolbars and panes for you to work on connections, database objects and advanced tools. Navicat is a multi-connections Database Administration tool allowing you to connect to MySQL, Oracle, PostgreSQL, SQLite, SQL Server, MariaDB and/or MongoDB databases, making database administration to multiple kinds of database so easy. If the Show objects under schema in navigation pane option is checked at the Preferences window, all database objects are also displayed in the pane. After comparing data, the window shows the number of records that will be inserted, updated or deleted in the target. To connect to a database or schema, simply double-click it in the pane. If opportunity doesn’t knock, build a door. Navicat Monitor is a safe, simple and agentless remote server monitoring tool that is packed with powerful features to make your monitoring effective as possible. Navicat provides powerful tools for working with queries: Query Editor for editing the query text directly, and Query Builder, Find Builder or Aggregate Builder for building queries visually. It collects process metrics such as CPU load, RAM usage, and a variety of other resources over SSH/SNMP. The Information Pane shows the detailed object information, project activities, the DDL of database objects, object dependencies, membership of users/roles and preview. SSH serves to prevent such vulnerabilities and allows you to access a remote server's shell without compromising security. Navicat Cloud could not connect and access your databases. By which it means, it could only store your connection settings, queries, model files, and virtual group; your database passwords and data (e.g. tables, views, etc) will not be stored to Navicat Cloud. Navicat Monitor can be installed on any local computer or virtual machine and does not require any software installation on the servers being monitored.",
                "product_num": 848,
                "source": "官网",
                "gmt_modified": 1754567747000,
                "product_name": "产品V4",
                "status_label": [
                    {
                        "label": "已输单",
                        "value": 3
                    }
                ],
                "opportunity_id": 3,
                "followup_time": 1435433641000,
                "expected_date": 1506700800000,
                "opportunity_name": "商务合作洽谈",
                "competitor": "cursor",
                "source_label": [
                    {
                        "label": "官网",
                        "value": "官网"
                    }
                ],
                "employee_id": 28,
                "id": 3,
                "customer_id": 3,
                "opportunity_step": "第二次拜访（正式拜访）",
                "status": 3
            },
            {
                "gmt_create": 973638915000,
                "amount": 600.00,
                "opportunity_step_label": [
                    {
                        "label": "第一次拜访（接触）",
                        "value": "第一次拜访（接触）"
                    }
                ],
                "description": "Navicat 15 has added support for the system-wide dark mode. In the middle of winter I at last discovered that there was in me an invincible summer. It is used while your ISPs do not allow direct connections, but allows establishing HTTP connections. A man is not old until regrets take the place of dreams. Navicat allows you to transfer data from one database and/or schema to another with detailed analytical process. I will greet this day with love in my heart. A comfort zone is a beautiful place, but nothing ever grows there. Navicat Monitor requires a repository to store alerts and metrics for historical analysis. Navicat Cloud could not connect and access your databases. By which it means, it could only store your connection settings, queries, model files, and virtual group; your database passwords and data (e.g. tables, views, etc) will not be stored to Navicat Cloud. In the Objects tab, you can use the List List, Detail Detail and ER Diagram ER Diagram buttons to change the object view. After comparing data, the window shows the number of records that will be inserted, updated or deleted in the target. To start working with your server in Navicat, you should first establish a connection or several connections using the Connection window. You will succeed because most people are lazy. Optimism is the one quality more associated with success and happiness than any other. Instead of wondering when your next vacation is, maybe you should set up a life you don’t need to escape from. The Main Window consists of several toolbars and panes for you to work on connections, database objects and advanced tools. With its well-designed Graphical User Interface(GUI), Navicat lets you quickly and easily create, organize, access and share information in a secure and easy way. Remember that failure is an event, not a person. If your Internet Service Provider (ISP) does not provide direct access to its server, Secure Tunneling Protocol (SSH) / HTTP is another solution. Typically, it is employed as an encrypted version of Telnet. With its well-designed Graphical User Interface(GUI), Navicat lets you quickly and easily create, organize, access and share information in a secure and easy way. If your Internet Service Provider (ISP) does not provide direct access to its server, Secure Tunneling Protocol (SSH) / HTTP is another solution. SQL Editor allows you to create and edit SQL text, prepare and execute selected queries. With its well-designed Graphical User Interface(GUI), Navicat lets you quickly and easily create, organize, access and share information in a secure and easy way. Remember that failure is an event, not a person. Remember that failure is an event, not a person. If it scares you, it might be a good thing to try. All the Navicat Cloud objects are located under different projects. You can share the project to other Navicat Cloud accounts for collaboration. It can also manage cloud databases such as Amazon Redshift, Amazon RDS, Alibaba Cloud. Features in Navicat are sophisticated enough to provide professional developers for all their specific needs, yet easy to learn for users who are new to database server. With its well-designed Graphical User Interface(GUI), Navicat lets you quickly and easily create, organize, access and share information in a secure and easy way. Optimism is the one quality more associated with success and happiness than any other. The reason why a great man is great is that he resolves to be a great man. It can also manage cloud databases such as Amazon Redshift, Amazon RDS, Alibaba Cloud. Features in Navicat are sophisticated enough to provide professional developers for all their specific needs, yet easy to learn for users who are new to database server. How we spend our days is, of course, how we spend our lives. If the plan doesn’t work, change the plan, but never the goal. The first step is as good as half over. Navicat Data Modeler enables you to build high-quality conceptual, logical and physical data models for a wide variety of audiences. The repository database can be an existing MySQL, MariaDB, PostgreSQL, SQL Server, or Amazon RDS instance. Secure SHell (SSH) is a program to log in into another computer over a network, execute commands on a remote server, and move files from one machine to another. Such sessions are also susceptible to session hijacking, where a malicious user takes over your session once you have authenticated. It can also manage cloud databases such as Amazon Redshift, Amazon RDS, Alibaba Cloud. Features in Navicat are sophisticated enough to provide professional developers for all their specific needs, yet easy to learn for users who are new to database server. After comparing data, the window shows the number of records that will be inserted, updated or deleted in the target. You can select any connections, objects or projects, and then select the corresponding buttons on the Information Pane. A query is used to extract data from the database in a readable format according to the user's request. I may not have gone where I intended to go, but I think I have ended up where I needed to be. Navicat allows you to transfer data from one database and/or schema to another with detailed analytical process. In the middle of winter I at last discovered that there was in me an invincible summer. Such sessions are also susceptible to session hijacking, where a malicious user takes over your session once you have authenticated. You will succeed because most people are lazy. You can select any connections, objects or projects, and then select the corresponding buttons on the Information Pane. To clear or reload various internal caches, flush tables, or acquire locks, control-click your connection in the Navigation pane and select Flush and choose the flush option. You must have the reload privilege to use this feature. Navicat allows you to transfer data from one database and/or schema to another with detailed analytical process. It provides strong authentication and secure encrypted communications between two hosts, known as SSH Port Forwarding (Tunneling), over an insecure network. Difficult circumstances serve as a textbook of life for people. What you get by achieving your goals is not as important as what you become by achieving your goals. The Information Pane shows the detailed object information, project activities, the DDL of database objects, object dependencies, membership of users/roles and preview. The first step is as good as half over. In the middle of winter I at last discovered that there was in me an invincible summer. Champions keep playing until they get it right. Navicat authorizes you to make connection to remote servers running on different platforms (i.e. Windows, macOS, Linux and UNIX), and supports PAM and GSSAPI authentication. If your Internet Service Provider (ISP) does not provide direct access to its server, Secure Tunneling Protocol (SSH) / HTTP is another solution. If you wait, all that happens is you get older. SQL Editor allows you to create and edit SQL text, prepare and execute selected queries. In the Objects tab, you can use the List List, Detail Detail and ER Diagram ER Diagram buttons to change the object view. Anyone who has never made a mistake has never tried anything new. With its well-designed Graphical User Interface(GUI), Navicat lets you quickly and easily create, organize, access and share information in a secure and easy way. To open a query using an external editor, control-click it and select Open with External Editor. You can set the file path of an external editor in Preferences. All the Navicat Cloud objects are located under different projects. You can share the project to other Navicat Cloud accounts for collaboration. A man’s best friends are his ten fingers. Secure Sockets Layer(SSL) is a protocol for transmitting private documents via the Internet. Navicat 15 has added support for the system-wide dark mode. If you wait, all that happens is you get older. I will greet this day with love in my heart. To open a query using an external editor, control-click it and select Open with External Editor. You can set the file path of an external editor in Preferences. SQL Editor allows you to create and edit SQL text, prepare and execute selected queries. A comfort zone is a beautiful place, but nothing ever grows there. If you wait, all that happens is you get older. Difficult circumstances serve as a textbook of life for people. Navicat Data Modeler is a powerful and cost-effective database design tool which helps you build high-quality conceptual, logical and physical data models. After logged in the Navicat Cloud feature, the Navigation pane will be divided into Navicat Cloud and My Connections sections. Import Wizard allows you to import data to tables/collections from CSV, TXT, XML, DBF and more. Navicat provides powerful tools for working with queries: Query Editor for editing the query text directly, and Query Builder, Find Builder or Aggregate Builder for building queries visually. Secure SHell (SSH) is a program to log in into another computer over a network, execute commands on a remote server, and move files from one machine to another. If you wait, all that happens is you get older. After comparing data, the window shows the number of records that will be inserted, updated or deleted in the target. Actually it is just in an idea when feel oneself can achieve and cannot achieve. The Synchronize to Database function will give you a full picture of all database differences. To open a query using an external editor, control-click it and select Open with External Editor. You can set the file path of an external editor in Preferences.",
                "product_num": 631,
                "source": "网上销售",
                "gmt_modified": 1754567744000,
                "product_name": "产品V3",
                "status_label": [
                    {
                        "label": "已赢单",
                        "value": 2
                    }
                ],
                "opportunity_id": 2,
                "followup_time": 1419370960000,
                "expected_date": 1744992000000,
                "opportunity_name": "供应链合作",
                "competitor": "cursor",
                "source_label": [
                    {
                        "label": "网上销售",
                        "value": "网上销售"
                    }
                ],
                "employee_id": 28,
                "id": 2,
                "customer_id": 2,
                "opportunity_step": "第一次拜访（接触）",
                "status": 2
            },
            {
                "gmt_create": 1734520365000,
                "amount": 500.00,
                "opportunity_step_label": [
                    {
                        "label": "第一次拜访（接触）",
                        "value": "第一次拜访（接触）"
                    }
                ],
                "description": "To get a secure connection, the first thing you need to do is to install OpenSSL Library and download Database Source. With its well-designed Graphical User Interface(GUI), Navicat lets you quickly and easily create, organize, access and share information in a secure and easy way. Navicat authorizes you to make connection to remote servers running on different platforms (i.e. Windows, macOS, Linux and UNIX), and supports PAM and GSSAPI authentication. A man is not old until regrets take the place of dreams. It provides strong authentication and secure encrypted communications between two hosts, known as SSH Port Forwarding (Tunneling), over an insecure network. If you wait, all that happens is you get older. Champions keep playing until they get it right. The On Startup feature allows you to control what tabs appear when you launch Navicat. It wasn’t raining when Noah built the ark. The Main Window consists of several toolbars and panes for you to work on connections, database objects and advanced tools. What you get by achieving your goals is not as important as what you become by achieving your goals. Typically, it is employed as an encrypted version of Telnet. Typically, it is employed as an encrypted version of Telnet. Import Wizard allows you to import data to tables/collections from CSV, TXT, XML, DBF and more. If your Internet Service Provider (ISP) does not provide direct access to its server, Secure Tunneling Protocol (SSH) / HTTP is another solution. All journeys have secret destinations of which the traveler is unaware. Creativity is intelligence having fun. A man is not old until regrets take the place of dreams. SSH serves to prevent such vulnerabilities and allows you to access a remote server's shell without compromising security. A man’s best friends are his ten fingers. Navicat authorizes you to make connection to remote servers running on different platforms (i.e. Windows, macOS, Linux and UNIX), and supports PAM and GSSAPI authentication. Navicat Monitor requires a repository to store alerts and metrics for historical analysis. The Navigation pane employs tree structure which allows you to take action upon the database and their objects through their pop-up menus quickly and easily. Genius is an infinite capacity for taking pains. Champions keep playing until they get it right. A man is not old until regrets take the place of dreams. Navicat Data Modeler is a powerful and cost-effective database design tool which helps you build high-quality conceptual, logical and physical data models. Navicat 15 has added support for the system-wide dark mode. After logged in the Navicat Cloud feature, the Navigation pane will be divided into Navicat Cloud and My Connections sections. Navicat Monitor requires a repository to store alerts and metrics for historical analysis. Anyone who has never made a mistake has never tried anything new. A man is not old until regrets take the place of dreams. Champions keep playing until they get it right. If the Show objects under schema in navigation pane option is checked at the Preferences window, all database objects are also displayed in the pane. Navicat Cloud could not connect and access your databases. By which it means, it could only store your connection settings, queries, model files, and virtual group; your database passwords and data (e.g. tables, views, etc) will not be stored to Navicat Cloud. I may not have gone where I intended to go, but I think I have ended up where I needed to be. Creativity is intelligence having fun. Anyone who has never made a mistake has never tried anything new. To start working with your server in Navicat, you should first establish a connection or several connections using the Connection window. You must be the change you wish to see in the world. It wasn’t raining when Noah built the ark. If the Show objects under schema in navigation pane option is checked at the Preferences window, all database objects are also displayed in the pane. Export Wizard allows you to export data from tables, collections, views, or query results to any available formats. In the Objects tab, you can use the List List, Detail Detail and ER Diagram ER Diagram buttons to change the object view. All journeys have secret destinations of which the traveler is unaware. There is no way to happiness. Happiness is the way. A query is used to extract data from the database in a readable format according to the user's request. It provides strong authentication and secure encrypted communications between two hosts, known as SSH Port Forwarding (Tunneling), over an insecure network. In a Telnet session, all communications, including username and password, are transmitted in plain-text, allowing anyone to listen-in on your session and steal passwords and other information. In the Objects tab, you can use the List List, Detail Detail and ER Diagram ER Diagram buttons to change the object view. Secure Sockets Layer(SSL) is a protocol for transmitting private documents via the Internet. Navicat Data Modeler enables you to build high-quality conceptual, logical and physical data models for a wide variety of audiences. To clear or reload various internal caches, flush tables, or acquire locks, control-click your connection in the Navigation pane and select Flush and choose the flush option. You must have the reload privilege to use this feature. HTTP Tunneling is a method for connecting to a server that uses the same protocol (http://) and the same port (port 80) as a web server does.",
                "product_num": 964,
                "source": "电话销售",
                "gmt_modified": 1754567741000,
                "product_name": "产品V1",
                "status_label": [
                    {
                        "label": "进行中",
                        "value": 1
                    }
                ],
                "opportunity_id": 1,
                "followup_time": 1631068650000,
                "expected_date": 1163865600000,
                "opportunity_name": "采购意向合同",
                "competitor": "cursor",
                "source_label": [
                    {
                        "label": "电话销售",
                        "value": "电话销售"
                    }
                ],
                "employee_id": 27,
                "id": 1,
                "customer_id": 1,
                "opportunity_step": "第一次拜访（接触）",
                "status": 1
            }
        ],
        "paging": {
            "currentPage": 1,
            "totalCount": 5,
            "pageSize": 10
        },
        "tableColumns": [
            {
                "dataIndex": "id",
                "title": "商机ID",
                "name": "商机ID",
                "type": "NUMBER",
                "description": "商机ID",
                "sortNum": 1,
                "id": 659459,
                "code": "id",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":false,\"pkField\":true,\"modifyDate\":false,\"autoIncrement\":true,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"系统自动生成\",\"maxLength\":20,\"createDate\":false,\"tooltip\":\"商机的唯一系统标识，用于内部关联和数据管理\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "customer_id",
                "title": "客户ID",
                "name": "客户ID",
                "type": "NUMBER",
                "description": "客户ID",
                "sortNum": 2,
                "id": 659460,
                "code": "customer_id",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入客户ID，如：C1001\",\"maxLength\":19,\"createDate\":false,\"tooltip\":\"关联客户的唯一标识，用于建立商机与客户的关联关系\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "opportunity_name",
                "title": "商机名称",
                "name": "商机名称",
                "type": "TEXT",
                "description": "商机名称",
                "sortNum": 3,
                "id": 659461,
                "code": "opportunity_name",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入商机名称，如：XX公司保险采购项目\",\"maxLength\":100,\"createDate\":false,\"tooltip\":\"商机的名称，建议包含客户名称和项目类型，便于快速识别\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "amount",
                "title": "预计金额",
                "name": "预计金额",
                "type": "NUMBER",
                "description": "预计金额",
                "sortNum": 4,
                "id": 659462,
                "code": "amount",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入预计金额，如：500000\",\"maxLength\":12,\"createDate\":false,\"tooltip\":\"预计成交金额，用于销售预测和业绩统计\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "employee_id",
                "title": "负责人ID",
                "name": "负责人ID",
                "type": "NUMBER",
                "description": "负责人ID，关联销售员工表的employee_id",
                "sortNum": 5,
                "id": 659463,
                "code": "employee_id",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入负责人ID，如：E2001\",\"maxLength\":19,\"createDate\":false,\"tooltip\":\"负责该商机的销售员工ID，用于分配和跟进管理\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "expected_date",
                "title": "预计成交日期",
                "name": "预计成交日期",
                "type": "DATE",
                "description": "预计成交日期",
                "sortNum": 6,
                "id": 659464,
                "code": "expected_date",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请选择预计成交日期\",\"maxLength\":10,\"createDate\":false,\"tooltip\":\"预计的成交时间，用于销售计划和跟进提醒\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "source",
                "title": "商机来源",
                "name": "商机来源",
                "type": "RADIO",
                "description": "商机来源，（可选范围：电话销售、网上销售、官网、展会、他人介绍、社交媒体、其他）",
                "sortNum": 7,
                "id": 659465,
                "code": "source",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":[{\"label\":\"电话销售\",\"value\":\"电话销售\"},{\"label\":\"网上销售\",\"value\":\"网上销售\"},{\"label\":\"官网\",\"value\":\"官网\"},{\"label\":\"展会\",\"value\":\"展会\"},{\"label\":\"他人介绍\",\"value\":\"他人介绍\"},{\"label\":\"社交媒体\",\"value\":\"社交媒体\"},{\"label\":\"其他\",\"value\":\"其他\"}],\"disabled\":false,\"placeholder\":\"请选择商机来源\",\"maxLength\":32,\"createDate\":false,\"tooltip\":\"商机的获取渠道，用于分析市场推广效果和渠道质量\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "opportunity_step",
                "title": "商机阶段",
                "name": "商机阶段",
                "type": "RADIO",
                "description": "商机阶段，(可选范围：第一次拜访（接触），第二次拜访（正式拜访）、第三次拜访（报价）、第四次拜访（签单）、丢单、其他)",
                "sortNum": 8,
                "id": 659466,
                "code": "opportunity_step",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":[{\"label\":\"第一次拜访（接触）\",\"value\":\"第一次拜访（接触）\"},{\"label\":\"第二次拜访（正式拜访）\",\"value\":\"第二次拜访（正式拜访）\"},{\"label\":\"第三次拜访（报价）\",\"value\":\"第三次拜访（报价）\"},{\"label\":\"第四次拜访（签单）\",\"value\":\"第四次拜访（签单）\"},{\"label\":\"丢单\",\"value\":\"丢单\"},{\"label\":\"其他\",\"value\":\"其他\"}],\"disabled\":false,\"placeholder\":\"请选择商机阶段\",\"maxLength\":32,\"createDate\":false,\"tooltip\":\"商机当前所处的阶段，用于销售流程管理和预测\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "product_name",
                "title": "产品名称",
                "name": "产品名称",
                "type": "TEXT",
                "description": "产品名称",
                "sortNum": 9,
                "id": 659467,
                "code": "product_name",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入产品名称，如：企业财产险标准版\",\"maxLength\":64,\"createDate\":false,\"tooltip\":\"涉及的产品名称，用于产品销售统计和分析\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "product_num",
                "title": "产品数量",
                "name": "产品数量",
                "type": "NUMBER",
                "description": "产品数量",
                "sortNum": 10,
                "id": 659468,
                "code": "product_num",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入产品数量，如：10\",\"maxLength\":10,\"createDate\":false,\"tooltip\":\"涉及的产品数量，用于销售量统计和库存准备\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "description",
                "title": "商机描述",
                "name": "商机描述",
                "type": "TEXTAREA",
                "description": "商机描述",
                "sortNum": 11,
                "id": 659469,
                "code": "description",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入商机描述，如：XX公司计划采购10份企业财产险，预计本月内成交\",\"maxLength\":65535,\"createDate\":false,\"tooltip\":\"商机的详细描述信息，包括客户需求、特殊要求等\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": false,
                "deleted": false
            },
            {
                "dataIndex": "competitor",
                "title": "竞争对手",
                "name": "竞争对手",
                "type": "TEXT",
                "description": "竞争对手",
                "sortNum": 12,
                "id": 659470,
                "code": "competitor",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入竞争对手名称，如：XX保险公司\",\"maxLength\":128,\"createDate\":false,\"tooltip\":\"当前竞争该商机的其他公司，用于竞争分析\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "followup_time",
                "title": "最后跟进时间",
                "name": "最后跟进时间",
                "type": "DATE",
                "description": "最后跟进时间",
                "sortNum": 13,
                "id": 659471,
                "code": "followup_time",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请选择最后跟进时间\",\"maxLength\":19,\"createDate\":false,\"tooltip\":\"最后一次跟进的时间，用于跟进频率管理和提醒\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "status",
                "title": "状态",
                "name": "状态",
                "type": "RADIO",
                "description": "状态，(可选范围：1:进行中,2:已赢单,3:已输单)",
                "sortNum": 14,
                "id": 659472,
                "code": "status",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":[{\"label\":\"进行中\",\"value\":1},{\"label\":\"已赢单\",\"value\":2},{\"label\":\"已输单\",\"value\":3}],\"disabled\":false,\"placeholder\":\"请选择状态\",\"maxLength\":3,\"createDate\":false,\"tooltip\":\"商机的当前状态，用于销售漏斗管理和业绩预测\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "gmt_create",
                "title": "创建时间",
                "name": "创建时间",
                "type": "DATE",
                "description": "创建时间",
                "sortNum": 15,
                "id": 659473,
                "code": "gmt_create",
                "extend": "{\"systemRetain\":true,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":true,\"placeholder\":\"系统自动维护\",\"maxLength\":19,\"createDate\":true,\"tooltip\":\"商机记录的创建时间，由系统自动生成和维护\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "gmt_modified",
                "title": "修改时间",
                "name": "修改时间",
                "type": "DATE",
                "description": "修改时间",
                "sortNum": 16,
                "id": 659474,
                "code": "gmt_modified",
                "extend": "{\"systemRetain\":true,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":true,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":true,\"placeholder\":\"系统自动维护\",\"maxLength\":19,\"createDate\":false,\"tooltip\":\"商机记录的最后修改时间，由系统自动更新\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            }
        ]
    },
    "failed": false
}
```


### 2.3 客户信息列表
- 接口地址：
https://api.yuntooai.com/dbapi/runtime/yuntoo/app-619c8afe/a92f2e805b104f3fb49fbe450fffe551/getList

- 接口返回的快照：
```typescript
{
    "success": true,
    "msg": "",
    "errorMsg": "",
    "errorCode": "0000",
    "params": null,
    "data": {
        "tableData": [
            {
                "customer_type": "个人",
                "gmt_create": 999083821000,
                "address": "612 East Alley",
                "level_id": 4,
                "remark": "A query is used to extract data from the database in a readable format according to the user's request. The past has no power over the present moment. To clear or reload various internal caches, flush tables, or acquire locks, control-click your connection in the Navigation pane and select Flush and choose the flush option. You must have the reload privilege to use this feature. To get a secure connection, the first thing you need to do is to install OpenSSL Library and download Database Source. Actually it is just in an idea when feel oneself can achieve and cannot achieve. With its well-designed Graphical User Interface(GUI), Navicat lets you quickly and easily create, organize, access and share information in a secure and easy way. You cannot save people, you can just love them. You cannot save people, you can just love them. To successfully establish a new connection to local/remote server - no matter via SSL, SSH or HTTP, set the database login information in the General tab. After logged in the Navicat Cloud feature, the Navigation pane will be divided into Navicat Cloud and My Connections sections. It is used while your ISPs do not allow direct connections, but allows establishing HTTP connections. To successfully establish a new connection to local/remote server - no matter via SSL or SSH, set the database login information in the General tab. Navicat Cloud could not connect and access your databases. By which it means, it could only store your connection settings, queries, model files, and virtual group; your database passwords and data (e.g. tables, views, etc) will not be stored to Navicat Cloud. The Information Pane shows the detailed object information, project activities, the DDL of database objects, object dependencies, membership of users/roles and preview. Creativity is intelligence having fun. All journeys have secret destinations of which the traveler is unaware. If you wait, all that happens is you get older. Secure Sockets Layer(SSL) is a protocol for transmitting private documents via the Internet. All journeys have secret destinations of which the traveler is unaware. The Synchronize to Database function will give you a full picture of all database differences. If the plan doesn’t work, change the plan, but never the goal. Always keep your eyes open. Keep watching. Because whatever you see can inspire you. Navicat Cloud provides a cloud service for synchronizing connections, queries, model files and virtual group information from Navicat, other Navicat family members, different machines and different platforms. SQL Editor allows you to create and edit SQL text, prepare and execute selected queries. If the Show objects under schema in navigation pane option is checked at the Preferences window, all database objects are also displayed in the pane. Sometimes you win, sometimes you learn. Secure Sockets Layer(SSL) is a protocol for transmitting private documents via the Internet. After logged in the Navicat Cloud feature, the Navigation pane will be divided into Navicat Cloud and My Connections sections. Navicat is a multi-connections Database Administration tool allowing you to connect to MySQL, Oracle, PostgreSQL, SQLite, SQL Server, MariaDB and/or MongoDB databases, making database administration to multiple kinds of database so easy. It provides strong authentication and secure encrypted communications between two hosts, known as SSH Port Forwarding (Tunneling), over an insecure network. There is no way to happiness. Happiness is the way. Navicat Monitor requires a repository to store alerts and metrics for historical analysis. The first step is as good as half over. Navicat provides powerful tools for working with queries: Query Editor for editing the query text directly, and Query Builder, Find Builder or Aggregate Builder for building queries visually. If it scares you, it might be a good thing to try. All the Navicat Cloud objects are located under different projects. You can share the project to other Navicat Cloud accounts for collaboration. Flexible settings enable you to set up a custom key for comparison and synchronization. Navicat Data Modeler enables you to build high-quality conceptual, logical and physical data models for a wide variety of audiences. Navicat Cloud provides a cloud service for synchronizing connections, queries, model files and virtual group information from Navicat, other Navicat family members, different machines and different platforms. Secure Sockets Layer(SSL) is a protocol for transmitting private documents via the Internet. Secure SHell (SSH) is a program to log in into another computer over a network, execute commands on a remote server, and move files from one machine to another. It is used while your ISPs do not allow direct connections, but allows establishing HTTP connections. What you get by achieving your goals is not as important as what you become by achieving your goals. I destroy my enemies when I make them my friends. Navicat Cloud provides a cloud service for synchronizing connections, queries, model files and virtual group information from Navicat, other Navicat family members, different machines and different platforms. To clear or reload various internal caches, flush tables, or acquire locks, control-click your connection in the Navigation pane and select Flush and choose the flush option. You must have the reload privilege to use this feature. The Navigation pane employs tree structure which allows you to take action upon the database and their objects through their pop-up menus quickly and easily. The repository database can be an existing MySQL, MariaDB, PostgreSQL, SQL Server, or Amazon RDS instance. Difficult circumstances serve as a textbook of life for people. The repository database can be an existing MySQL, MariaDB, PostgreSQL, SQL Server, or Amazon RDS instance. You must be the change you wish to see in the world. To open a query using an external editor, control-click it and select Open with External Editor. You can set the file path of an external editor in Preferences. To clear or reload various internal caches, flush tables, or acquire locks, control-click your connection in the Navigation pane and select Flush and choose the flush option. You must have the reload privilege to use this feature. It wasn’t raining when Noah built the ark. Navicat 15 has added support for the system-wide dark mode. The Synchronize to Database function will give you a full picture of all database differences. A comfort zone is a beautiful place, but nothing ever grows there. All journeys have secret destinations of which the traveler is unaware. In a Telnet session, all communications, including username and password, are transmitted in plain-text, allowing anyone to listen-in on your session and steal passwords and other information. All journeys have secret destinations of which the traveler is unaware. Navicat allows you to transfer data from one database and/or schema to another with detailed analytical process. To clear or reload various internal caches, flush tables, or acquire locks, control-click your connection in the Navigation pane and select Flush and choose the flush option. You must have the reload privilege to use this feature. How we spend our days is, of course, how we spend our lives. Champions keep playing until they get it right. Instead of wondering when your next vacation is, maybe you should set up a life you don’t need to escape from. All journeys have secret destinations of which the traveler is unaware. After logged in the Navicat Cloud feature, the Navigation pane will be divided into Navicat Cloud and My Connections sections. What you get by achieving your goals is not as important as what you become by achieving your goals. The Synchronize to Database function will give you a full picture of all database differences. I will greet this day with love in my heart. Anyone who has ever made anything of importance was disciplined. Navicat Monitor is a safe, simple and agentless remote server monitoring tool that is packed with powerful features to make your monitoring effective as possible. Navicat Monitor requires a repository to store alerts and metrics for historical analysis. Navicat allows you to transfer data from one database and/or schema to another with detailed analytical process. If it scares you, it might be a good thing to try. The Main Window consists of several toolbars and panes for you to work on connections, database objects and advanced tools. If the Show objects under schema in navigation pane option is checked at the Preferences window, all database objects are also displayed in the pane. To open a query using an external editor, control-click it and select Open with External Editor. You can set the file path of an external editor in Preferences. Navicat 15 has added support for the system-wide dark mode. Actually it is just in an idea when feel oneself can achieve and cannot achieve. How we spend our days is, of course, how we spend our lives. HTTP Tunneling is a method for connecting to a server that uses the same protocol (http://) and the same port (port 80) as a web server does. If it scares you, it might be a good thing to try. Remember that failure is an event, not a person. The Synchronize to Database function will give you a full picture of all database differences. What you get by achieving your goals is not as important as what you become by achieving your goals. If your Internet Service Provider (ISP) does not provide direct access to its server, Secure Tunneling Protocol (SSH) / HTTP is another solution. You can select any connections, objects or projects, and then select the corresponding buttons on the Information Pane. A man is not old until regrets take the place of dreams. The past has no power over the present moment. Instead of wondering when your next vacation is, maybe you should set up a life you don’t need to escape from.",
                "source": "他人介绍",
                "contact_id": 6,
                "gmt_modified": 1754566610000,
                "level_id_label": [
                    {
                        "label": "高级客户",
                        "value": 4
                    }
                ],
                "status_label": [
                    {
                        "label": "活跃",
                        "value": 1,
                        "children": null
                    }
                ],
                "employee_id": 31,
                "customer_type_label": [
                    {
                        "label": "个人",
                        "value": "个人",
                        "children": null
                    }
                ],
                "customer_name": "杭州云图科技有限公司",
                "id": 6,
                "customer_id": 6,
                "status": 1
            },
            {
                "customer_type": "企业",
                "gmt_create": 1153400663000,
                "address": "643 Earle Rd",
                "level_id": 4,
                "remark": "The Synchronize to Database function will give you a full picture of all database differences. HTTP Tunneling is a method for connecting to a server that uses the same protocol (http://) and the same port (port 80) as a web server does. SQL Editor allows you to create and edit SQL text, prepare and execute selected queries. A query is used to extract data from the database in a readable format according to the user's request. Genius is an infinite capacity for taking pains.",
                "source": "网上销售",
                "contact_id": 4,
                "gmt_modified": 1754566608000,
                "level_id_label": [
                    {
                        "label": "高级客户",
                        "value": 4
                    }
                ],
                "status_label": [
                    {
                        "label": "活跃",
                        "value": 1,
                        "children": null
                    }
                ],
                "employee_id": 30,
                "customer_type_label": [
                    {
                        "label": "企业",
                        "value": "企业",
                        "children": null
                    }
                ],
                "customer_name": "云云科技公司",
                "id": 4,
                "customer_id": 4,
                "status": 1
            },
            {
                "customer_type": "个人",
                "gmt_create": 1512315014000,
                "address": "641 Whitehouse Lane, Huntingdon Rd",
                "level_id": 2,
                "remark": "After logged in the Navicat Cloud feature, the Navigation pane will be divided into Navicat Cloud and My Connections sections. The Navigation pane employs tree structure which allows you to take action upon the database and their objects through their pop-up menus quickly and easily. The reason why a great man is great is that he resolves to be a great man. Champions keep playing until they get it right. After comparing data, the window shows the number of records that will be inserted, updated or deleted in the target. I destroy my enemies when I make them my friends. The On Startup feature allows you to control what tabs appear when you launch Navicat. Import Wizard allows you to import data to tables/collections from CSV, TXT, XML, DBF and more. Navicat allows you to transfer data from one database and/or schema to another with detailed analytical process. Genius is an infinite capacity for taking pains. Optimism is the one quality more associated with success and happiness than any other. Creativity is intelligence having fun. The reason why a great man is great is that he resolves to be a great man. Navicat is a multi-connections Database Administration tool allowing you to connect to MySQL, Oracle, PostgreSQL, SQLite, SQL Server, MariaDB and/or MongoDB databases, making database administration to multiple kinds of database so easy. Anyone who has never made a mistake has never tried anything new. All the Navicat Cloud objects are located under different projects. You can share the project to other Navicat Cloud accounts for collaboration. Monitored servers include MySQL, MariaDB and SQL Server, and compatible with cloud databases like Amazon RDS, Amazon Aurora, Oracle Cloud, Google Cloud and Microsoft Azure. After logged in the Navicat Cloud feature, the Navigation pane will be divided into Navicat Cloud and My Connections sections. You can select any connections, objects or projects, and then select the corresponding buttons on the Information Pane. To start working with your server in Navicat, you should first establish a connection or several connections using the Connection window. If your Internet Service Provider (ISP) does not provide direct access to its server, Secure Tunneling Protocol (SSH) / HTTP is another solution. To successfully establish a new connection to local/remote server - no matter via SSL, SSH or HTTP, set the database login information in the General tab. HTTP Tunneling is a method for connecting to a server that uses the same protocol (http://) and the same port (port 80) as a web server does. Navicat is a multi-connections Database Administration tool allowing you to connect to MySQL, Oracle, PostgreSQL, SQLite, SQL Server, MariaDB and/or MongoDB databases, making database administration to multiple kinds of database so easy. You must be the change you wish to see in the world. The On Startup feature allows you to control what tabs appear when you launch Navicat.",
                "source": "展会",
                "contact_id": 3,
                "gmt_modified": 1754566605000,
                "level_id_label": [
                    {
                        "label": "中级客户",
                        "value": 2
                    }
                ],
                "status_label": [
                    {
                        "label": "正常",
                        "value": 2,
                        "children": null
                    }
                ],
                "employee_id": 29,
                "customer_type_label": [
                    {
                        "label": "个人",
                        "value": "个人",
                        "children": null
                    }
                ],
                "customer_name": "兔兔科技股份有限公司",
                "id": 3,
                "customer_id": 3,
                "status": 2
            },
            {
                "customer_type": "企业",
                "gmt_create": 1376950921000,
                "address": "837 Silver St, Newnham",
                "level_id": 2,
                "remark": "Genius is an infinite capacity for taking pains. The Synchronize to Database function will give you a full picture of all database differences. In the middle of winter I at last discovered that there was in me an invincible summer. You will succeed because most people are lazy. In a Telnet session, all communications, including username and password, are transmitted in plain-text, allowing anyone to listen-in on your session and steal passwords and other information. Champions keep playing until they get it right. It can also manage cloud databases such as Amazon Redshift, Amazon RDS, Alibaba Cloud. Features in Navicat are sophisticated enough to provide professional developers for all their specific needs, yet easy to learn for users who are new to database server. You must be the change you wish to see in the world. Difficult circumstances serve as a textbook of life for people. Actually it is just in an idea when feel oneself can achieve and cannot achieve. Difficult circumstances serve as a textbook of life for people. SSH serves to prevent such vulnerabilities and allows you to access a remote server's shell without compromising security. Navicat authorizes you to make connection to remote servers running on different platforms (i.e. Windows, macOS, Linux and UNIX), and supports PAM and GSSAPI authentication. After comparing data, the window shows the number of records that will be inserted, updated or deleted in the target. A man’s best friends are his ten fingers. In a Telnet session, all communications, including username and password, are transmitted in plain-text, allowing anyone to listen-in on your session and steal passwords and other information. Optimism is the one quality more associated with success and happiness than any other. I destroy my enemies when I make them my friends. Secure Sockets Layer(SSL) is a protocol for transmitting private documents via the Internet. How we spend our days is, of course, how we spend our lives. Anyone who has ever made anything of importance was disciplined. If the Show objects under schema in navigation pane option is checked at the Preferences window, all database objects are also displayed in the pane. Navicat Monitor is a safe, simple and agentless remote server monitoring tool that is packed with powerful features to make your monitoring effective as possible. Anyone who has ever made anything of importance was disciplined. Navicat Monitor can be installed on any local computer or virtual machine and does not require any software installation on the servers being monitored. If your Internet Service Provider (ISP) does not provide direct access to its server, Secure Tunneling Protocol (SSH) / HTTP is another solution. You must be the change you wish to see in the world. Creativity is intelligence having fun. A man’s best friends are his ten fingers. If the plan doesn’t work, change the plan, but never the goal. Import Wizard allows you to import data to tables/collections from CSV, TXT, XML, DBF and more. The On Startup feature allows you to control what tabs appear when you launch Navicat. Navicat allows you to transfer data from one database and/or schema to another with detailed analytical process. Optimism is the one quality more associated with success and happiness than any other. To open a query using an external editor, control-click it and select Open with External Editor. You can set the file path of an external editor in Preferences. The Main Window consists of several toolbars and panes for you to work on connections, database objects and advanced tools. You can select any connections, objects or projects, and then select the corresponding buttons on the Information Pane. It is used while your ISPs do not allow direct connections, but allows establishing HTTP connections. The reason why a great man is great is that he resolves to be a great man. Anyone who has ever made anything of importance was disciplined. Navicat Monitor can be installed on any local computer or virtual machine and does not require any software installation on the servers being monitored. HTTP Tunneling is a method for connecting to a server that uses the same protocol (http://) and the same port (port 80) as a web server does. Remember that failure is an event, not a person. It is used while your ISPs do not allow direct connections, but allows establishing HTTP connections. Navicat Monitor requires a repository to store alerts and metrics for historical analysis. If you wait, all that happens is you get older. You cannot save people, you can just love them. It collects process metrics such as CPU load, RAM usage, and a variety of other resources over SSH/SNMP. Navicat is a multi-connections Database Administration tool allowing you to connect to MySQL, Oracle, PostgreSQL, SQLite, SQL Server, MariaDB and/or MongoDB databases, making database administration to multiple kinds of database so easy.",
                "source": "官网",
                "contact_id": 2,
                "gmt_modified": 1754566595000,
                "level_id_label": [
                    {
                        "label": "中级客户",
                        "value": 2
                    }
                ],
                "status_label": [
                    {
                        "label": "流失",
                        "value": 0,
                        "children": null
                    }
                ],
                "employee_id": 28,
                "customer_type_label": [
                    {
                        "label": "企业",
                        "value": "企业",
                        "children": null
                    }
                ],
                "customer_name": "云图科技有限公司",
                "id": 2,
                "customer_id": 2,
                "status": 0
            },
            {
                "customer_type": "企业",
                "gmt_create": 1378161220000,
                "address": "3-15-1 Ginza, Chuo-ku",
                "level_id": 1,
                "remark": "If it scares you, it might be a good thing to try. Navicat Cloud could not connect and access your databases. By which it means, it could only store your connection settings, queries, model files, and virtual group; your database passwords and data (e.g. tables, views, etc) will not be stored to Navicat Cloud. Typically, it is employed as an encrypted version of Telnet. To get a secure connection, the first thing you need to do is to install OpenSSL Library and download Database Source. Always keep your eyes open. Keep watching. Because whatever you see can inspire you. The Synchronize to Database function will give you a full picture of all database differences. Monitored servers include MySQL, MariaDB and SQL Server, and compatible with cloud databases like Amazon RDS, Amazon Aurora, Oracle Cloud, Google Cloud and Microsoft Azure. A query is used to extract data from the database in a readable format according to the user's request. A man is not old until regrets take the place of dreams. After comparing data, the window shows the number of records that will be inserted, updated or deleted in the target. Navicat Data Modeler is a powerful and cost-effective database design tool which helps you build high-quality conceptual, logical and physical data models. Sometimes you win, sometimes you learn. A comfort zone is a beautiful place, but nothing ever grows there. A query is used to extract data from the database in a readable format according to the user's request. I may not have gone where I intended to go, but I think I have ended up where I needed to be. It wasn’t raining when Noah built the ark. If your Internet Service Provider (ISP) does not provide direct access to its server, Secure Tunneling Protocol (SSH) / HTTP is another solution. A man is not old until regrets take the place of dreams. If the Show objects under schema in navigation pane option is checked at the Preferences window, all database objects are also displayed in the pane. Success consists of going from failure to failure without loss of enthusiasm. Navicat Monitor can be installed on any local computer or virtual machine and does not require any software installation on the servers being monitored. In a Telnet session, all communications, including username and password, are transmitted in plain-text, allowing anyone to listen-in on your session and steal passwords and other information. Anyone who has never made a mistake has never tried anything new. Secure Sockets Layer(SSL) is a protocol for transmitting private documents via the Internet. Typically, it is employed as an encrypted version of Telnet. Navicat Monitor can be installed on any local computer or virtual machine and does not require any software installation on the servers being monitored. Navicat Data Modeler is a powerful and cost-effective database design tool which helps you build high-quality conceptual, logical and physical data models. Typically, it is employed as an encrypted version of Telnet. In other words, Navicat provides the ability for data in different databases and/or schemas to be kept up-to-date so that each repository contains the same information. To connect to a database or schema, simply double-click it in the pane. It wasn’t raining when Noah built the ark. All the Navicat Cloud objects are located under different projects. You can share the project to other Navicat Cloud accounts for collaboration. A comfort zone is a beautiful place, but nothing ever grows there. Navicat Cloud provides a cloud service for synchronizing connections, queries, model files and virtual group information from Navicat, other Navicat family members, different machines and different platforms. It can also manage cloud databases such as Amazon Redshift, Amazon RDS, Alibaba Cloud. Features in Navicat are sophisticated enough to provide professional developers for all their specific needs, yet easy to learn for users who are new to database server. With its well-designed Graphical User Interface(GUI), Navicat lets you quickly and easily create, organize, access and share information in a secure and easy way. To get a secure connection, the first thing you need to do is to install OpenSSL Library and download Database Source. In other words, Navicat provides the ability for data in different databases and/or schemas to be kept up-to-date so that each repository contains the same information. HTTP Tunneling is a method for connecting to a server that uses the same protocol (http://) and the same port (port 80) as a web server does. If opportunity doesn’t knock, build a door. You will succeed because most people are lazy. Navicat allows you to transfer data from one database and/or schema to another with detailed analytical process. If the plan doesn’t work, change the plan, but never the goal. All journeys have secret destinations of which the traveler is unaware. I may not have gone where I intended to go, but I think I have ended up where I needed to be. Navicat provides powerful tools for working with queries: Query Editor for editing the query text directly, and Query Builder, Find Builder or Aggregate Builder for building queries visually. Import Wizard allows you to import data to tables/collections from CSV, TXT, XML, DBF and more. Remember that failure is an event, not a person. The repository database can be an existing MySQL, MariaDB, PostgreSQL, SQL Server, or Amazon RDS instance. To successfully establish a new connection to local/remote server - no matter via SSL, SSH or HTTP, set the database login information in the General tab. The On Startup feature allows you to control what tabs appear when you launch Navicat. A comfort zone is a beautiful place, but nothing ever grows there. To successfully establish a new connection to local/remote server - no matter via SSL, SSH or HTTP, set the database login information in the General tab. Difficult circumstances serve as a textbook of life for people. It is used while your ISPs do not allow direct connections, but allows establishing HTTP connections. Navicat Data Modeler enables you to build high-quality conceptual, logical and physical data models for a wide variety of audiences. The repository database can be an existing MySQL, MariaDB, PostgreSQL, SQL Server, or Amazon RDS instance. Always keep your eyes open. Keep watching. Because whatever you see can inspire you. Navicat allows you to transfer data from one database and/or schema to another with detailed analytical process. Navicat Data Modeler is a powerful and cost-effective database design tool which helps you build high-quality conceptual, logical and physical data models. In the Objects tab, you can use the List List, Detail Detail and ER Diagram ER Diagram buttons to change the object view.",
                "source": "电话销售",
                "contact_id": 1,
                "gmt_modified": 1754566591000,
                "level_id_label": [
                    {
                        "label": "普通客户",
                        "value": 1
                    }
                ],
                "status_label": [
                    {
                        "label": "活跃",
                        "value": 1,
                        "children": null
                    }
                ],
                "employee_id": 27,
                "customer_type_label": [
                    {
                        "label": "企业",
                        "value": "企业",
                        "children": null
                    }
                ],
                "customer_name": "云兔科技有限公司",
                "id": 1,
                "customer_id": 1,
                "status": 1
            }
        ],
        "paging": {
            "currentPage": 1,
            "totalCount": 5,
            "pageSize": 10
        },
        "tableColumns": [
            {
                "dataIndex": "id",
                "title": "客户ID",
                "name": "客户ID",
                "type": "NUMBER",
                "description": "客户ID",
                "sortNum": 1,
                "id": 659475,
                "code": "id",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":false,\"pkField\":true,\"modifyDate\":false,\"autoIncrement\":true,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"系统自动生成\",\"maxLength\":20,\"createDate\":false,\"tooltip\":\"客户信息的唯一系统标识，用于内部关联和数据管理\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "customer_name",
                "title": "客户名称",
                "name": "客户名称",
                "type": "TEXT",
                "description": "客户名称",
                "sortNum": 2,
                "id": 659476,
                "code": "customer_name",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入客户名称，如：张三/XX科技有限公司\",\"maxLength\":100,\"createDate\":false,\"tooltip\":\"客户的正式名称，个人客户填写姓名，企业客户填写公司全称\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "customer_type",
                "title": "客户类型",
                "name": "客户类型",
                "type": "RADIO",
                "description": "客户类型，(可选范围：企业,个人)",
                "sortNum": 3,
                "id": 659477,
                "code": "customer_type",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":[{\"label\":\"企业\",\"value\":\"企业\",\"children\":null},{\"label\":\"个人\",\"value\":\"个人\",\"children\":null}],\"disabled\":false,\"placeholder\":\"请选择客户类型\",\"maxLength\":32,\"createDate\":false,\"tooltip\":\"区分客户是个人客户还是企业客户，影响后续信息填写\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "level_id",
                "title": "客户等级",
                "name": "客户等级",
                "type": "SELECT",
                "description": "客户等级ID",
                "sortNum": 4,
                "id": 659478,
                "code": "level_id",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"selectItemsSource\":{\"datasetCode\":\"149ec2c6ad9045e9a6a615d27810dec8\",\"code\":\"level_id\",\"tenantCode\":\"yuntoo\",\"appCode\":\"app-619c8afe\",\"label\":\"level_name\",\"source\":\"DB_TABLE\"},\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"请选择客户等级\",\"maxLength\":19,\"createDate\":false,\"tooltip\":\"根据客户重要性或价值划分的等级，影响服务标准和跟进策略\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "contact_id",
                "title": "联系人",
                "name": "联系人",
                "type": "NUMBER",
                "description": "联系人ID",
                "sortNum": 5,
                "id": 659479,
                "code": "contact_id",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请选择联系人\",\"maxLength\":19,\"createDate\":false,\"tooltip\":\"该客户的主要联系人，用于日常沟通和跟进\",\"tableVisible\":true,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "source",
                "title": "客户来源",
                "name": "客户来源",
                "type": "TEXT",
                "description": "客户来源，（可选范围：电话销售、网上销售、官网、展会、他人介绍、社交媒体、其他）",
                "sortNum": 6,
                "id": 659480,
                "code": "source",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入客户来源，如：展会/社交媒体\",\"maxLength\":32,\"createDate\":false,\"tooltip\":\"客户最初获取的渠道，用于评估市场活动效果\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "address",
                "title": "联系地址",
                "name": "联系地址",
                "type": "TEXTAREA",
                "description": "联系地址",
                "sortNum": 7,
                "id": 659481,
                "code": "address",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入完整联系地址，包括省/市/区/街道\",\"maxLength\":255,\"createDate\":false,\"tooltip\":\"客户的实际办公或居住地址，用于物流、服务等业务场景\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": false,
                "deleted": false
            },
            {
                "dataIndex": "status",
                "title": "客户状态",
                "name": "客户状态",
                "type": "RADIO",
                "description": "客户状态，(可选范围：1:活跃,0:流失,2:正常)",
                "sortNum": 8,
                "id": 659482,
                "code": "status",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":[{\"label\":\"活跃\",\"value\":1,\"children\":null},{\"label\":\"流失\",\"value\":0,\"children\":null},{\"label\":\"正常\",\"value\":2,\"children\":null}],\"disabled\":false,\"placeholder\":\"请选择客户状态\",\"maxLength\":3,\"createDate\":false,\"tooltip\":\"客户当前的状态，活跃客户可正常跟进，流失客户需要重点挽回\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "employee_id",
                "title": "我司负责人",
                "name": "我司负责人",
                "type": "NUMBER",
                "description": "我司负责人，（关联销售员工表的employee_id）",
                "sortNum": 9,
                "id": 659483,
                "code": "employee_id",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"请选择负责人\",\"maxLength\":19,\"createDate\":false,\"tooltip\":\"负责该客户的主要销售人员，负责日常跟进和维护\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "remark",
                "title": "备注说明",
                "name": "备注说明",
                "type": "TEXTAREA",
                "description": "备注说明",
                "sortNum": 10,
                "id": 659484,
                "code": "remark",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入备注信息，如：客户特殊需求、重要沟通记录等\",\"maxLength\":65535,\"createDate\":false,\"tooltip\":\"用于记录客户相关的补充信息，如特殊需求、沟通要点等\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": false,
                "deleted": false
            },
            {
                "dataIndex": "gmt_create",
                "title": "创建时间",
                "name": "创建时间",
                "type": "DATE",
                "description": "创建时间",
                "sortNum": 11,
                "id": 659485,
                "code": "gmt_create",
                "extend": "{\"systemRetain\":true,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":true,\"placeholder\":\"系统自动生成\",\"maxLength\":19,\"createDate\":true,\"tooltip\":\"系统自动记录的客户信息创建时间\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "gmt_modified",
                "title": "修改时间",
                "name": "修改时间",
                "type": "DATE",
                "description": "修改时间",
                "sortNum": 12,
                "id": 659486,
                "code": "gmt_modified",
                "extend": "{\"systemRetain\":true,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":true,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":true,\"placeholder\":\"系统自动维护\",\"maxLength\":19,\"createDate\":false,\"tooltip\":\"系统自动记录的最后修改时间\",\"tableVisible\":true,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            }
        ]
    },
    "failed": false
}
```

### 2.4 客户联系人列表

- 接口地址：https://api.yuntooai.com/dbapi/runtime/yuntoo/app-619c8afe/52dd8c1ec82c424eab86bf474926d2c7/getList
- 数据返回的快照：
```typescript
{
    "success": true,
    "msg": "",
    "errorMsg": "",
    "errorCode": "0000",
    "params": null,
    "data": {
        "tableData": [
            {
                "birthday": 1051977600000,
                "gmt_create": 1090745841000,
                "gender_label": [
                    {
                        "label": "女",
                        "value": 0,
                        "children": null
                    }
                ],
                "gender": 0,
                "community_account": "4jCzC5aK4k",
                "mobile": "13575459165",
                "customer_id_label": [
                    {
                        "label": "兔兔科技股份有限公司",
                        "value": 3
                    }
                ],
                "position_label": [
                    {
                        "label": "运营",
                        "value": "运营"
                    }
                ],
                "remark": "",
                "contact_id": 6,
                "gmt_modified": 1754726291000,
                "department_label": [
                    {
                        "label": "采购部",
                        "value": "采购部"
                    }
                ],
                "phone": "838-891-2589",
                "name": "唐总",
                "position": "运营",
                "id": 6,
                "customer_id": 3,
                "department": "采购部",
                "email": "jsimmons@outlook.com",
                "hobby": "美食、旅游、运动"
            },
            {
                "birthday": 1692806400000,
                "gmt_create": 1388342811000,
                "gender_label": [
                    {
                        "label": "男",
                        "value": 1,
                        "children": null
                    }
                ],
                "gender": 1,
                "community_account": "96IIZLxxd5",
                "mobile": "13575459165",
                "customer_id_label": [
                    {
                        "label": "云图科技有限公司",
                        "value": 2
                    }
                ],
                "position_label": [
                    {
                        "label": "CEO",
                        "value": "CEO"
                    }
                ],
                "remark": "",
                "contact_id": 4,
                "gmt_modified": 1754726288000,
                "department_label": [
                    {
                        "label": "运营部",
                        "value": "运营部"
                    }
                ],
                "phone": "80-9288-1457",
                "name": "钱主任",
                "position": "CEO",
                "id": 4,
                "customer_id": 2,
                "department": "运营部",
                "email": "rmo@icloud.com",
                "hobby": "网球、旅游、运动"
            },
            {
                "birthday": 1095350400000,
                "gmt_create": 1697984992000,
                "gender_label": [
                    {
                        "label": "女",
                        "value": 0,
                        "children": null
                    }
                ],
                "gender": 0,
                "community_account": "cVMwUDtj5Z",
                "mobile": "13575459165",
                "customer_id_label": [
                    {
                        "label": "云图科技有限公司",
                        "value": 2
                    }
                ],
                "position_label": [
                    {
                        "label": "采购员",
                        "value": "采购员"
                    }
                ],
                "remark": "",
                "contact_id": 3,
                "gmt_modified": 1754726271000,
                "department_label": [
                    {
                        "label": "生产部",
                        "value": "生产部"
                    }
                ],
                "phone": "312-546-0724",
                "name": "赵部长",
                "position": "采购员",
                "id": 3,
                "customer_id": 2,
                "department": "生产部",
                "email": "marwood@icloud.com",
                "hobby": "摄影、旅游、运动"
            },
            {
                "birthday": 1251820800000,
                "gmt_create": 1293795964000,
                "gender_label": [
                    {
                        "label": "男",
                        "value": 1,
                        "children": null
                    }
                ],
                "gender": 1,
                "community_account": "jDWD4ciply",
                "mobile": "13575459165",
                "customer_id_label": [
                    {
                        "label": "云兔科技有限公司",
                        "value": 1
                    }
                ],
                "position_label": [
                    {
                        "label": "市场负责人",
                        "value": "市场负责人"
                    }
                ],
                "remark": "",
                "contact_id": 2,
                "gmt_modified": 1754726265000,
                "department_label": [
                    {
                        "label": "市场部",
                        "value": "市场部"
                    }
                ],
                "phone": "838-985-2400",
                "name": "张经理",
                "position": "市场负责人",
                "id": 2,
                "customer_id": 1,
                "department": "市场部",
                "email": "ngsaiwing1015@icloud.com",
                "hobby": "旅游、运动"
            },
            {
                "birthday": 1375891200000,
                "gmt_create": 1455420578000,
                "gender_label": [
                    {
                        "label": "女",
                        "value": 0,
                        "children": null
                    }
                ],
                "gender": 0,
                "community_account": "EpPuvt8X3g",
                "mobile": "13575459165",
                "customer_id_label": [
                    {
                        "label": "云兔科技有限公司",
                        "value": 1
                    }
                ],
                "position_label": [
                    {
                        "label": "采购经理",
                        "value": "采购经理"
                    }
                ],
                "remark": "",
                "contact_id": 1,
                "gmt_modified": 1754726268000,
                "department_label": [
                    {
                        "label": "销售部",
                        "value": "销售部"
                    }
                ],
                "phone": "212-546-4633",
                "name": "王经理",
                "position": "采购经理",
                "id": 1,
                "customer_id": 1,
                "department": "销售部",
                "email": "pan603@gmail.com",
                "hobby": "旅游、运动"
            }
        ],
        "paging": {
            "currentPage": 1,
            "totalCount": 5,
            "pageSize": 10
        },
        "tableColumns": [
            {
                "dataIndex": "id",
                "title": "联系人ID",
                "name": "联系人ID",
                "type": "NUMBER",
                "description": "联系人ID",
                "sortNum": 1,
                "id": 659487,
                "code": "id",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":false,\"pkField\":true,\"modifyDate\":false,\"autoIncrement\":true,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"系统自动生成\",\"maxLength\":20,\"createDate\":false,\"tooltip\":\"联系人的唯一标识，系统自动生成且不可更改\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "customer_id",
                "title": "客户ID",
                "name": "客户ID",
                "type": "SELECT",
                "description": "客户ID",
                "sortNum": 2,
                "id": 659488,
                "code": "customer_id",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"selectItemsSource\":{\"datasetCode\":\"a92f2e805b104f3fb49fbe450fffe551\",\"code\":\"customer_id\",\"tenantCode\":\"yuntoo\",\"appCode\":\"app-619c8afe\",\"label\":\"customer_name\",\"source\":\"DB_TABLE\"},\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"请选择关联客户\",\"maxLength\":19,\"createDate\":false,\"tooltip\":\"联系人所属的客户单位\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "name",
                "title": "联系人姓名",
                "name": "联系人姓名",
                "type": "TEXT",
                "description": "联系人姓名",
                "sortNum": 3,
                "id": 659489,
                "code": "name",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入联系人姓名，如：张伟\",\"maxLength\":32,\"createDate\":false,\"tooltip\":\"客户联系人的全名\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "mobile",
                "title": "手机",
                "name": "手机",
                "type": "TEXT",
                "description": "手机",
                "sortNum": 4,
                "id": 659490,
                "code": "mobile",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入手机号码，如：13800001111\",\"maxLength\":32,\"createDate\":false,\"tooltip\":\"联系人的主要手机号码\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "email",
                "title": "邮箱",
                "name": "邮箱",
                "type": "TEXT",
                "description": "邮箱",
                "sortNum": 5,
                "id": 659491,
                "code": "email",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入邮箱地址，如：zhangwei@example.com\",\"maxLength\":64,\"createDate\":false,\"tooltip\":\"联系人的主要电子邮箱\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "position",
                "title": "职位",
                "name": "职位",
                "type": "SELECT",
                "description": "职位，（可选范围：CEO、采购经理、采购员、市场负责人、运营、销售经理、销售员）",
                "sortNum": 6,
                "id": 659492,
                "code": "position",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":[{\"label\":\"CEO\",\"value\":\"CEO\"},{\"label\":\"采购经理\",\"value\":\"采购经理\"},{\"label\":\"采购员\",\"value\":\"采购员\"},{\"label\":\"市场负责人\",\"value\":\"市场负责人\"},{\"label\":\"运营\",\"value\":\"运营\"},{\"label\":\"销售经理\",\"value\":\"销售经理\"},{\"label\":\"销售员\",\"value\":\"销售员\"}],\"disabled\":false,\"placeholder\":\"请选择职位\",\"maxLength\":16,\"createDate\":false,\"tooltip\":\"联系人在客户单位的职位\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "department",
                "title": "部门",
                "name": "部门",
                "type": "SELECT",
                "description": "部门，(可选范围：销售部、采购部、市场部、生产部、运营部、技术部、其他)",
                "sortNum": 7,
                "id": 659493,
                "code": "department",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":[{\"label\":\"销售部\",\"value\":\"销售部\"},{\"label\":\"采购部\",\"value\":\"采购部\"},{\"label\":\"市场部\",\"value\":\"市场部\"},{\"label\":\"生产部\",\"value\":\"生产部\"},{\"label\":\"运营部\",\"value\":\"运营部\"},{\"label\":\"技术部\",\"value\":\"技术部\"},{\"label\":\"其他\",\"value\":\"其他\"}],\"disabled\":false,\"placeholder\":\"请选择部门\",\"maxLength\":32,\"createDate\":false,\"tooltip\":\"联系人所属部门\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "phone",
                "title": "固定电话",
                "name": "固定电话",
                "type": "TEXT",
                "description": "固定电话",
                "sortNum": 8,
                "id": 659494,
                "code": "phone",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入固定电话号码，如：010-87654321\",\"maxLength\":20,\"createDate\":false,\"tooltip\":\"联系人的固定电话号码\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "community_account",
                "title": "社交账号",
                "name": "社交账号",
                "type": "TEXT",
                "description": "社交账号",
                "sortNum": 9,
                "id": 659495,
                "code": "community_account",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入社交账号，如：微信/LinkedIn账号\",\"maxLength\":50,\"createDate\":false,\"tooltip\":\"联系人的社交平台账号\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "gender",
                "title": "性别",
                "name": "性别",
                "type": "SELECT",
                "description": "性别(1:男,0:女)",
                "sortNum": 10,
                "id": 659496,
                "code": "gender",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":[{\"label\":\"男\",\"value\":1,\"children\":null},{\"label\":\"女\",\"value\":0,\"children\":null}],\"disabled\":false,\"placeholder\":\"请选择性别\",\"maxLength\":3,\"createDate\":false,\"tooltip\":\"联系人的性别\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "birthday",
                "title": "生日",
                "name": "生日",
                "type": "DATE",
                "description": "生日",
                "sortNum": 11,
                "id": 659497,
                "code": "birthday",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请选择出生日期\",\"maxLength\":10,\"createDate\":false,\"tooltip\":\"联系人的出生日期\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "hobby",
                "title": "兴趣爱好",
                "name": "兴趣爱好",
                "type": "TEXT",
                "description": "兴趣爱好",
                "sortNum": 12,
                "id": 659498,
                "code": "hobby",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入兴趣爱好，如：阅读、运动\",\"maxLength\":128,\"createDate\":false,\"tooltip\":\"联系人的兴趣爱好，有助于建立良好关系\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "remark",
                "title": "备注",
                "name": "备注",
                "type": "TEXTAREA",
                "description": "备注",
                "sortNum": 13,
                "id": 659499,
                "code": "remark",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入备注信息，如：客户偏好、重要事项等\",\"maxLength\":256,\"createDate\":false,\"tooltip\":\"其他需要记录的补充信息\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": false,
                "deleted": false
            },
            {
                "dataIndex": "gmt_create",
                "title": "创建时间",
                "name": "创建时间",
                "type": "DATE",
                "description": "创建时间",
                "sortNum": 14,
                "id": 659500,
                "code": "gmt_create",
                "extend": "{\"systemRetain\":true,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":true,\"placeholder\":\"系统自动生成\",\"maxLength\":19,\"createDate\":true,\"tooltip\":\"系统自动记录的创建时间\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "gmt_modified",
                "title": "修改时间",
                "name": "修改时间",
                "type": "DATE",
                "description": "修改时间",
                "sortNum": 15,
                "id": 659501,
                "code": "gmt_modified",
                "extend": "{\"systemRetain\":true,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":true,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":true,\"placeholder\":\"系统自动维护\",\"maxLength\":19,\"createDate\":false,\"tooltip\":\"系统自动记录的最后修改时间\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            }
        ]
    },
    "failed": false
}
```



### 2.5 产品信息列表
- 接口地址：https://api.yuntooai.com/dbapi/runtime/yuntoo/app-619c8afe/2e02926a12c54ffd9aa388b2352cb64c/getList
- 返回结果快照：
```typescript
{
    "success": true,
    "msg": "",
    "errorMsg": "",
    "errorCode": "0000",
    "params": null,
    "data": {
        "tableData": [],
        "paging": {
            "currentPage": 1,
            "totalCount": 0,
            "pageSize": 10
        },
        "tableColumns": [
            {
                "dataIndex": "id",
                "title": "产品ID",
                "name": "产品ID",
                "type": "NUMBER",
                "description": "产品ID",
                "sortNum": 1,
                "id": 659502,
                "code": "id",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":false,\"pkField\":true,\"modifyDate\":false,\"autoIncrement\":true,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"系统自动生成\",\"maxLength\":20,\"createDate\":false,\"tooltip\":\"产品的唯一标识符，由系统自动维护\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "product_name",
                "title": "产品名称",
                "name": "产品名称",
                "type": "TEXT",
                "description": "产品名称",
                "sortNum": 2,
                "id": 659503,
                "code": "product_name",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入产品名称，如：智能手表Pro版\",\"maxLength\":64,\"createDate\":false,\"tooltip\":\"产品的完整名称，用于展示和识别，建议包含产品类型和型号信息\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "price",
                "title": "价格（元）",
                "name": "价格（元）",
                "type": "NUMBER",
                "description": "价格（元）",
                "sortNum": 3,
                "id": 659504,
                "code": "price",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入价格，如：1999\",\"maxLength\":12,\"createDate\":false,\"tooltip\":\"产品的销售价格，单位为元\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "inventory",
                "title": "库存量",
                "name": "库存量",
                "type": "NUMBER",
                "description": "库存量",
                "sortNum": 4,
                "id": 659505,
                "code": "inventory",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入库存数量，如：500\",\"maxLength\":12,\"createDate\":false,\"tooltip\":\"当前产品的库存数量\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "model",
                "title": "产品型号",
                "name": "产品型号",
                "type": "TEXT",
                "description": "产品型号",
                "sortNum": 5,
                "id": 659506,
                "code": "model",
                "extend": "{\"systemRetain\":false,\"logicDelete\":true,\"visible\":false,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":[{\"label\":\"正常\",\"value\":0,\"children\":null},{\"label\":\"已删除\",\"value\":1,\"children\":null}],\"disabled\":false,\"placeholder\":\"系统自动生成\",\"maxLength\":64,\"createDate\":false,\"tooltip\":\"产品型号，系统自动维护\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "unit",
                "title": "单位",
                "name": "单位",
                "type": "TEXT",
                "description": "单位，（可选范围：个、件、台、箱、千克、桶、米、吨）",
                "sortNum": 6,
                "id": 659507,
                "code": "unit",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请选择单位\",\"maxLength\":32,\"createDate\":false,\"tooltip\":\"产品的计量单位\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "barcode",
                "title": "条形码",
                "name": "条形码",
                "type": "TEXT",
                "description": "条形码",
                "sortNum": 7,
                "id": 659508,
                "code": "barcode",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入条形码编号\",\"maxLength\":32,\"createDate\":false,\"tooltip\":\"产品的条形码编号，用于扫码识别\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "is_standard",
                "title": "是否标品",
                "name": "是否标品",
                "type": "RADIO",
                "description": "是否标品，（可选范围：1:是，0:否）",
                "sortNum": 8,
                "id": 659509,
                "code": "is_standard",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":[{\"label\":\"是\",\"value\":1,\"children\":null},{\"label\":\"否\",\"value\":0,\"children\":null}],\"disabled\":false,\"placeholder\":\"请选择是否标品\",\"maxLength\":3,\"createDate\":false,\"tooltip\":\"标识该产品是否为标准产品\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "status",
                "title": "产品状态",
                "name": "产品状态",
                "type": "RADIO",
                "description": "产品状态，(可选范围：可销售、已下架、待上市)",
                "sortNum": 9,
                "id": 659510,
                "code": "status",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":[{\"label\":\"可销售\",\"value\":\"可销售\",\"children\":null},{\"label\":\"已下架\",\"value\":\"已下架\",\"children\":null},{\"label\":\"待上市\",\"value\":\"待上市\",\"children\":null}],\"disabled\":false,\"placeholder\":\"请选择产品状态\",\"maxLength\":16,\"createDate\":false,\"tooltip\":\"产品的当前销售状态\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "remark",
                "title": "备注",
                "name": "备注",
                "type": "TEXTAREA",
                "description": "备注",
                "sortNum": 10,
                "id": 659511,
                "code": "remark",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入备注信息，如：新品推荐、促销信息等\",\"maxLength\":255,\"createDate\":false,\"tooltip\":\"产品的补充说明信息\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": false,
                "deleted": false
            },
            {
                "dataIndex": "gmt_create",
                "title": "创建时间",
                "name": "创建时间",
                "type": "DATE",
                "description": "创建时间",
                "sortNum": 11,
                "id": 659512,
                "code": "gmt_create",
                "extend": "{\"systemRetain\":true,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":true,\"placeholder\":\"系统自动生成\",\"maxLength\":19,\"createDate\":true,\"tooltip\":\"产品创建时间，系统自动维护\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "gmt_modified",
                "title": "修改时间",
                "name": "修改时间",
                "type": "DATE",
                "description": "修改时间",
                "sortNum": 12,
                "id": 659513,
                "code": "gmt_modified",
                "extend": "{\"systemRetain\":true,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":true,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":true,\"placeholder\":\"系统自动生成\",\"maxLength\":19,\"createDate\":false,\"tooltip\":\"产品最后修改时间，系统自动维护\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            }
        ]
    },
    "failed": false
}
```

### 2.6 销售员工列表
- 接口地址：https://api.yuntooai.com/dbapi/runtime/yuntoo/app-619c8afe/c8bfd25c6ffc4a1ab8bdd2fa06490a22/getList
- 返回结果快照：
```typescript
{
    "success": true,
    "msg": "",
    "errorMsg": "",
    "errorCode": "0000",
    "params": null,
    "data": {
        "tableData": [
            {
                "gmt_create": 1294091682000,
                "employee_type_label": [
                    {
                        "label": "销售",
                        "value": "销售",
                        "children": null
                    }
                ],
                "last_login_time": 1214973554000,
                "employee_name": "赵六",
                "gmt_modified": 1754565938000,
                "status_label": [
                    {
                        "label": "正常",
                        "value": 1,
                        "children": null
                    }
                ],
                "employee_type": "销售",
                "phone": "212-111-2083",
                "employee_id": 31,
                "position": "总监",
                "id": 31,
                "department": "市场部",
                "email": "alfredmills10@gmail.com",
                "status": 1
            },
            {
                "gmt_create": 951901198000,
                "employee_type_label": [
                    {
                        "label": "销售",
                        "value": "销售",
                        "children": null
                    }
                ],
                "last_login_time": 1541140697000,
                "employee_name": "Liao Anqi",
                "gmt_modified": 1754565950000,
                "status_label": [
                    {
                        "label": "正常",
                        "value": 1,
                        "children": null
                    }
                ],
                "employee_type": "销售",
                "phone": "5918 591187",
                "employee_id": 30,
                "position": "总监",
                "id": 30,
                "department": "运营部",
                "email": "lanqi@gmail.com",
                "status": 1
            },
            {
                "gmt_create": 959875679000,
                "employee_type_label": [
                    {
                        "label": "采购",
                        "value": "采购",
                        "children": null
                    }
                ],
                "last_login_time": 1650693963000,
                "employee_name": "王五",
                "gmt_modified": 1754565930000,
                "status_label": [
                    {
                        "label": "停职",
                        "value": 0,
                        "children": null
                    }
                ],
                "employee_type": "采购",
                "phone": "28-5575-7420",
                "employee_id": 29,
                "position": "总监",
                "id": 29,
                "department": "生产部",
                "email": "hokyauau@gmail.com",
                "status": 0
            },
            {
                "gmt_create": 1754189368000,
                "employee_type_label": [
                    {
                        "label": "运营",
                        "value": "运营",
                        "children": null
                    }
                ],
                "last_login_time": 1457660708000,
                "employee_name": "李四",
                "gmt_modified": 1754565926000,
                "status_label": [
                    {
                        "label": "已离职",
                        "value": 2,
                        "children": null
                    }
                ],
                "employee_type": "运营",
                "phone": "28-9983-2895",
                "employee_id": 28,
                "position": "经理",
                "id": 28,
                "department": "采购部",
                "email": "kellyl52@gmail.com",
                "status": 2
            },
            {
                "gmt_create": 1202395445000,
                "employee_type_label": [
                    {
                        "label": "销售",
                        "value": "销售",
                        "children": null
                    }
                ],
                "last_login_time": 963895993000,
                "employee_name": "张三",
                "gmt_modified": 1754565923000,
                "status_label": [
                    {
                        "label": "正常",
                        "value": 1,
                        "children": null
                    }
                ],
                "employee_type": "销售",
                "phone": "5745 020379",
                "employee_id": 27,
                "position": "员工",
                "id": 27,
                "department": "销售部",
                "email": "maky@gmail.com",
                "status": 1
            }
        ],
        "paging": {
            "currentPage": 1,
            "totalCount": 5,
            "pageSize": 10
        },
        "tableColumns": [
            {
                "dataIndex": "id",
                "title": "用户ID",
                "name": "用户ID",
                "type": "NUMBER",
                "description": "用户ID",
                "sortNum": 1,
                "id": 659514,
                "code": "id",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":false,\"pkField\":true,\"modifyDate\":false,\"autoIncrement\":true,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"系统自动生成\",\"maxLength\":20,\"createDate\":false,\"tooltip\":\"用户ID由系统自动生成，用于唯一标识每个销售员工\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "employee_name",
                "title": "姓名",
                "name": "姓名",
                "type": "TEXT",
                "description": "姓名",
                "sortNum": 2,
                "id": 659515,
                "code": "employee_name",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入员工姓名，如：张伟\",\"maxLength\":32,\"createDate\":false,\"tooltip\":\"销售员工的正式姓名，用于身份识别和业务记录\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "employee_type",
                "title": "员工类型",
                "name": "员工类型",
                "type": "RADIO",
                "description": "员工类型，(可选范围：销售、运营、采购)",
                "sortNum": 3,
                "id": 659516,
                "code": "employee_type",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":[{\"label\":\"销售\",\"value\":\"销售\",\"children\":null},{\"label\":\"运营\",\"value\":\"运营\",\"children\":null},{\"label\":\"采购\",\"value\":\"采购\",\"children\":null}],\"disabled\":false,\"placeholder\":\"请选择员工类型\",\"maxLength\":16,\"createDate\":false,\"tooltip\":\"销售员工的分类，包括销售、运营、采购三种类型\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "position",
                "title": "岗位",
                "name": "岗位",
                "type": "TEXT",
                "description": "岗位，（可选范围：员工、经理、总监）",
                "sortNum": 4,
                "id": 659517,
                "code": "position",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入岗位，如：经理\",\"maxLength\":16,\"createDate\":false,\"tooltip\":\"员工在组织中的具体职位，如员工、经理、总监\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "department",
                "title": "所属部门",
                "name": "所属部门",
                "type": "TEXT",
                "description": "所属部门，（可选范围：销售部、采购部、市场部、生产部、运营部、技术部、其他）",
                "sortNum": 5,
                "id": 659518,
                "code": "department",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入所属部门，如：销售部\",\"maxLength\":32,\"createDate\":false,\"tooltip\":\"员工所属的部门，包括销售部、采购部、市场部、生产部、运营部、技术部等\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "phone",
                "title": "电话",
                "name": "电话",
                "type": "TEXT",
                "description": "电话",
                "sortNum": 6,
                "id": 659519,
                "code": "phone",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入电话号码，如：13800001111\",\"maxLength\":32,\"createDate\":false,\"tooltip\":\"员工的联系电话，用于工作沟通和客户联系\",\"tableVisible\":true,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "email",
                "title": "邮箱",
                "name": "邮箱",
                "type": "TEXT",
                "description": "邮箱",
                "sortNum": 7,
                "id": 659520,
                "code": "email",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入邮箱地址，如：zhangwei@example.com\",\"maxLength\":64,\"createDate\":false,\"tooltip\":\"员工的工作邮箱，用于业务沟通和通知接收\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "status",
                "title": "状态",
                "name": "状态",
                "type": "RADIO",
                "description": "状态，(可选范围：1:正常,0:停职，2:已离职)",
                "sortNum": 8,
                "id": 659521,
                "code": "status",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":[{\"label\":\"正常\",\"value\":1,\"children\":null},{\"label\":\"停职\",\"value\":0,\"children\":null},{\"label\":\"已离职\",\"value\":2,\"children\":null}],\"disabled\":false,\"placeholder\":\"请选择状态\",\"maxLength\":3,\"createDate\":false,\"tooltip\":\"员工当前的工作状态，包括正常、停职、已离职三种状态\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "last_login_time",
                "title": "最后登录时间",
                "name": "最后登录时间",
                "type": "DATE",
                "description": "最后登录时间",
                "sortNum": 9,
                "id": 659522,
                "code": "last_login_time",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请选择日期时间\",\"maxLength\":19,\"createDate\":false,\"tooltip\":\"员工最后一次登录系统的日期和时间\",\"tableVisible\":true,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "gmt_create",
                "title": "创建时间",
                "name": "创建时间",
                "type": "DATE",
                "description": "创建时间",
                "sortNum": 10,
                "id": 659523,
                "code": "gmt_create",
                "extend": "{\"systemRetain\":true,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":true,\"placeholder\":\"系统自动维护\",\"maxLength\":19,\"createDate\":true,\"tooltip\":\"记录创建时间，由系统自动生成和维护\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "gmt_modified",
                "title": "修改时间",
                "name": "修改时间",
                "type": "DATE",
                "description": "修改时间",
                "sortNum": 11,
                "id": 659524,
                "code": "gmt_modified",
                "extend": "{\"systemRetain\":true,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":true,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":true,\"placeholder\":\"系统自动维护\",\"maxLength\":19,\"createDate\":false,\"tooltip\":\"记录最后修改时间，由系统自动生成和维护\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            }
        ]
    },
    "failed": false
}
```
### 2.6 客户拜访记录列表
- 接口地址：https://api.yuntooai.com/dbapi/runtime/yuntoo/app-619c8afe/9e35aab7b40342989a841cf565a455a2/getList
- 返回结果快照：
```typescript
{
    "success": true,
    "msg": "",
    "errorMsg": "",
    "errorCode": "0000",
    "params": null,
    "data": {
        "tableData": [
            {
                "gmt_create": 1391201770000,
                "opportunity_step_label": [
                    {
                        "label": "第三次拜访（报价）",
                        "value": "第三次拜访（报价）"
                    }
                ],
                "visit_time": 1056690702000,
                "purpose": "谈报价",
                "visit_note": "报价基本谈好了",
                "visit_type_label": [
                    {
                        "label": "会议",
                        "value": "会议",
                        "children": null
                    }
                ],
                "customer_id_label": [
                    {
                        "label": "杭州云图科技有限公司",
                        "value": 6
                    }
                ],
                "visit_type": "会议",
                "gmt_modified": 1754567187000,
                "visit_result_label": [
                    {
                        "label": "符合预期",
                        "value": "符合预期",
                        "children": null
                    }
                ],
                "next_step_label": [
                    {
                        "label": "签单",
                        "value": "签单",
                        "children": null
                    }
                ],
                "record_id": 6,
                "status_label": [
                    {
                        "label": "已完成",
                        "value": 1,
                        "children": null
                    }
                ],
                "visit_result": "符合预期",
                "next_step": "签单",
                "employee_id": 30,
                "employee_id_label": [
                    {
                        "label": "Liao Anqi",
                        "value": 30
                    }
                ],
                "location": "杭州市余杭区五常大道188号",
                "id": 6,
                "customer_id": 6,
                "opportunity_step": "第三次拜访（报价）",
                "status": 1
            },
            {
                "gmt_create": 1561441503000,
                "opportunity_step_label": [
                    {
                        "label": "第二次拜访（正式拜访）",
                        "value": "第二次拜访（正式拜访）"
                    }
                ],
                "visit_time": 1228566443000,
                "purpose": "商谈合作机会",
                "visit_note": "报价没有谈拢",
                "visit_type_label": [
                    {
                        "label": "上门",
                        "value": "上门",
                        "children": null
                    }
                ],
                "customer_id_label": [
                    {
                        "label": "云云科技公司",
                        "value": 4
                    }
                ],
                "visit_type": "上门",
                "gmt_modified": 1754567149000,
                "visit_result_label": [
                    {
                        "label": "符合预期",
                        "value": "符合预期",
                        "children": null
                    }
                ],
                "next_step_label": [
                    {
                        "label": "报价",
                        "value": "报价",
                        "children": null
                    }
                ],
                "record_id": 4,
                "status_label": [
                    {
                        "label": "进行中",
                        "value": 0,
                        "children": null
                    }
                ],
                "visit_result": "符合预期",
                "next_step": "报价",
                "employee_id": 29,
                "employee_id_label": [
                    {
                        "label": "王五",
                        "value": 29
                    }
                ],
                "location": "杭州市余杭区五常大道188号",
                "id": 4,
                "customer_id": 4,
                "opportunity_step": "第二次拜访（正式拜访）",
                "status": 0
            },
            {
                "gmt_create": 1137005649000,
                "opportunity_step_label": [
                    {
                        "label": "第二次拜访（正式拜访）",
                        "value": "第二次拜访（正式拜访）"
                    }
                ],
                "visit_time": 960358495000,
                "purpose": "商谈合作机会",
                "visit_note": "无合作机会",
                "visit_type_label": [
                    {
                        "label": "上门",
                        "value": "上门",
                        "children": null
                    }
                ],
                "customer_id_label": [
                    {
                        "label": "兔兔科技股份有限公司",
                        "value": 3
                    }
                ],
                "visit_type": "上门",
                "gmt_modified": 1754567136000,
                "visit_result_label": [
                    {
                        "label": "已丢单",
                        "value": "已丢单",
                        "children": null
                    }
                ],
                "next_step_label": [
                    {
                        "label": "进一步接触",
                        "value": "进一步接触",
                        "children": null
                    }
                ],
                "record_id": 3,
                "status_label": [
                    {
                        "label": "已取消",
                        "value": 2,
                        "children": null
                    }
                ],
                "visit_result": "已丢单",
                "next_step": "进一步接触",
                "employee_id": 28,
                "employee_id_label": [
                    {
                        "label": "李四",
                        "value": 28
                    }
                ],
                "location": "杭州市余杭区五常大道188号",
                "id": 3,
                "customer_id": 3,
                "opportunity_step": "第二次拜访（正式拜访）",
                "status": 2
            },
            {
                "gmt_create": 1596566614000,
                "opportunity_step_label": [
                    {
                        "label": "第一次拜访（接触）",
                        "value": "第一次拜访（接触）"
                    }
                ],
                "visit_time": 1137708299000,
                "purpose": "寻求合作意向",
                "visit_note": "已完成客户接触",
                "visit_type_label": [
                    {
                        "label": "上门",
                        "value": "上门",
                        "children": null
                    }
                ],
                "customer_id_label": [
                    {
                        "label": "云图科技有限公司",
                        "value": 2
                    }
                ],
                "visit_type": "上门",
                "gmt_modified": 1754567144000,
                "visit_result_label": [
                    {
                        "label": "可能丢单",
                        "value": "可能丢单",
                        "children": null
                    }
                ],
                "next_step_label": [
                    {
                        "label": "进一步接触",
                        "value": "进一步接触",
                        "children": null
                    }
                ],
                "record_id": 2,
                "status_label": [
                    {
                        "label": "进行中",
                        "value": 0,
                        "children": null
                    }
                ],
                "visit_result": "可能丢单",
                "next_step": "进一步接触",
                "employee_id": 28,
                "employee_id_label": [
                    {
                        "label": "李四",
                        "value": 28
                    }
                ],
                "location": "杭州市余杭区五常大道188号",
                "id": 2,
                "customer_id": 2,
                "opportunity_step": "第一次拜访（接触）",
                "status": 0
            },
            {
                "gmt_create": 1657496048000,
                "opportunity_step_label": [
                    {
                        "label": "第一次拜访（接触）",
                        "value": "第一次拜访（接触）"
                    }
                ],
                "visit_time": 1110510060000,
                "purpose": "寻求合作意向",
                "visit_note": "已完成客户接触",
                "visit_type_label": [
                    {
                        "label": "电话",
                        "value": "电话",
                        "children": null
                    }
                ],
                "customer_id_label": [
                    {
                        "label": "云兔科技有限公司",
                        "value": 1
                    }
                ],
                "visit_type": "电话",
                "gmt_modified": 1754567119000,
                "visit_result_label": [
                    {
                        "label": "超出预期",
                        "value": "超出预期",
                        "children": null
                    }
                ],
                "next_step_label": [
                    {
                        "label": "进一步接触",
                        "value": "进一步接触",
                        "children": null
                    }
                ],
                "record_id": 1,
                "status_label": [
                    {
                        "label": "进行中",
                        "value": 0,
                        "children": null
                    }
                ],
                "visit_result": "超出预期",
                "next_step": "进一步接触",
                "employee_id": 27,
                "employee_id_label": [
                    {
                        "label": "张三",
                        "value": 27
                    }
                ],
                "location": "杭州市余杭区五常大道188号",
                "id": 1,
                "customer_id": 1,
                "opportunity_step": "第一次拜访（接触）",
                "status": 0
            }
        ],
        "paging": {
            "currentPage": 1,
            "totalCount": 5,
            "pageSize": 10
        },
        "tableColumns": [
            {
                "dataIndex": "id",
                "title": "记录ID",
                "name": "记录ID",
                "type": "NUMBER",
                "description": "系统自动生成的唯一拜访记录标识符",
                "sortNum": 1,
                "id": 659525,
                "code": "id",
                "extend": "{\"systemRetain\":true,\"logicDelete\":false,\"visible\":false,\"pkField\":true,\"modifyDate\":false,\"autoIncrement\":true,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":true,\"placeholder\":\"系统自动生成\",\"maxLength\":20,\"createDate\":false,\"tooltip\":\"系统自动生成的唯一拜访记录标识符，用于内部识别和数据关联\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "customer_id",
                "title": "客户名称",
                "name": "客户名称",
                "type": "SELECT",
                "description": "关联的客户信息",
                "sortNum": 2,
                "id": 659526,
                "code": "customer_id",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"selectItemsSource\":{\"datasetCode\":\"a92f2e805b104f3fb49fbe450fffe551\",\"code\":\"customer_id\",\"tenantCode\":\"yuntoo\",\"appCode\":\"app-619c8afe\",\"label\":\"customer_name\",\"source\":\"DB_TABLE\"},\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"请选择客户\",\"maxLength\":19,\"createDate\":false,\"tooltip\":\"拜访所关联的客户，用于建立客户关系和跟踪商机\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "employee_id",
                "title": "拜访人员",
                "name": "拜访人员",
                "type": "SELECT",
                "description": "执行拜访的销售人员",
                "sortNum": 3,
                "id": 659527,
                "code": "employee_id",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"selectItemsSource\":{\"datasetCode\":\"c8bfd25c6ffc4a1ab8bdd2fa06490a22\",\"code\":\"employee_id\",\"tenantCode\":\"yuntoo\",\"appCode\":\"app-619c8afe\",\"label\":\"employee_name\",\"source\":\"DB_TABLE\"},\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"请选择拜访人员\",\"maxLength\":10,\"createDate\":false,\"tooltip\":\"执行本次拜访任务的销售人员，通常是负责该客户的销售代表\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "visit_time",
                "title": "拜访时间",
                "name": "拜访时间",
                "type": "DATE",
                "description": "实际或计划的拜访时间",
                "sortNum": 4,
                "id": 659528,
                "code": "visit_time",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":false,\"placeholder\":\"请选择拜访时间\",\"maxLength\":19,\"createDate\":false,\"tooltip\":\"本次拜访的实际发生时间或计划拜访时间\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "visit_result",
                "title": "拜访结果",
                "name": "拜访结果",
                "type": "SELECT",
                "description": "拜访结果，（可选范围：超出预期，符合预期，可能丢单，已丢单）",
                "sortNum": 5,
                "id": 659529,
                "code": "visit_result",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":[{\"label\":\"超出预期\",\"value\":\"超出预期\",\"children\":null},{\"label\":\"符合预期\",\"value\":\"符合预期\",\"children\":null},{\"label\":\"可能丢单\",\"value\":\"可能丢单\",\"children\":null},{\"label\":\"已丢单\",\"value\":\"已丢单\",\"children\":null}],\"disabled\":false,\"placeholder\":\"请选择拜访结果\",\"maxLength\":32,\"createDate\":false,\"tooltip\":\"本次拜访的结果评估，用于后续跟进和商机分析\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "visit_type",
                "title": "拜访类型",
                "name": "拜访类型",
                "type": "RADIO",
                "description": "拜访类型，(可选范围：电话、上门、会议)",
                "sortNum": 6,
                "id": 659530,
                "code": "visit_type",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":[{\"label\":\"电话\",\"value\":\"电话\",\"children\":null},{\"label\":\"上门\",\"value\":\"上门\",\"children\":null},{\"label\":\"会议\",\"value\":\"会议\",\"children\":null}],\"disabled\":false,\"placeholder\":\"请选择拜访类型\",\"maxLength\":32,\"createDate\":false,\"tooltip\":\"本次拜访的形式，用于分析不同拜访方式的效果\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "opportunity_step",
                "title": "商机阶段",
                "name": "商机阶段",
                "type": "SELECT",
                "description": "商机阶段，(可选范围：第一次拜访（接触），第二次拜访（正式拜访）、第三次拜访（报价）、第四次拜访（签单）、丢单、其他)",
                "sortNum": 7,
                "id": 659531,
                "code": "opportunity_step",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"selectItemsSource\":{\"datasetCode\":\"b706fce73c6f4e19a038fa290d8815fe\",\"code\":\"opportunity_step\",\"tenantCode\":\"yuntoo\",\"appCode\":\"app-619c8afe\",\"label\":\"opportunity_step\",\"source\":\"DB_TABLE\"},\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请选择商机阶段\",\"maxLength\":32,\"createDate\":false,\"tooltip\":\"当前商机所处的阶段，用于销售漏斗分析和预测\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "location",
                "title": "拜访地点",
                "name": "拜访地点",
                "type": "TEXT",
                "description": "拜访地点",
                "sortNum": 8,
                "id": 659532,
                "code": "location",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入拜访地点，如：客户公司会议室\",\"maxLength\":128,\"createDate\":false,\"tooltip\":\"本次拜访的具体地点，便于后续回顾和行程安排\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "purpose",
                "title": "拜访目的",
                "name": "拜访目的",
                "type": "TEXT",
                "description": "拜访目的",
                "sortNum": 9,
                "id": 659533,
                "code": "purpose",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入拜访目的，如：初次接触、跟进报价、签订合同\",\"maxLength\":128,\"createDate\":false,\"tooltip\":\"本次拜访的主要目的，帮助明确拜访重点和评估效果\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "next_step",
                "title": "下一步计划",
                "name": "下一步计划",
                "type": "SELECT",
                "description": "下一步计划，（可选范围：进一步接触、报价、签单）",
                "sortNum": 10,
                "id": 659534,
                "code": "next_step",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":[{\"label\":\"进一步接触\",\"value\":\"进一步接触\",\"children\":null},{\"label\":\"报价\",\"value\":\"报价\",\"children\":null},{\"label\":\"签单\",\"value\":\"签单\",\"children\":null}],\"disabled\":false,\"placeholder\":\"请选择下一步计划\",\"maxLength\":32,\"createDate\":false,\"tooltip\":\"根据本次拜访结果制定的下一步行动计划\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "visit_note",
                "title": "拜访小记",
                "name": "拜访小记",
                "type": "TEXTAREA",
                "description": "拜访小记",
                "sortNum": 11,
                "id": 659535,
                "code": "visit_note",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":null,\"disabled\":false,\"placeholder\":\"请输入拜访小记，如：客户对产品A表现出浓厚兴趣，建议下次重点介绍产品优势\",\"maxLength\":65535,\"createDate\":false,\"tooltip\":\"记录本次拜访的详细情况，包括客户反馈、讨论要点等\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": false,
                "deleted": false
            },
            {
                "dataIndex": "status",
                "title": "拜访状态",
                "name": "拜访状态",
                "type": "SELECT",
                "description": "拜访状态，(可选范围：1:已完成,0:进行中，2:已取消)",
                "sortNum": 12,
                "id": 659536,
                "code": "status",
                "extend": "{\"systemRetain\":false,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":false,\"options\":[{\"label\":\"已完成\",\"value\":1,\"children\":null},{\"label\":\"进行中\",\"value\":0,\"children\":null},{\"label\":\"已取消\",\"value\":2,\"children\":null}],\"disabled\":false,\"placeholder\":\"请选择拜访状态\",\"maxLength\":3,\"createDate\":false,\"tooltip\":\"当前拜访任务的执行状态，用于任务管理和进度跟踪\",\"tableVisible\":true,\"filterVisible\":true}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "gmt_create",
                "title": "创建时间",
                "name": "创建时间",
                "type": "DATE",
                "description": "创建时间",
                "sortNum": 13,
                "id": 659537,
                "code": "gmt_create",
                "extend": "{\"systemRetain\":true,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":false,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":true,\"placeholder\":\"系统自动维护\",\"maxLength\":19,\"createDate\":true,\"tooltip\":\"记录创建时间，系统自动维护\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            },
            {
                "dataIndex": "gmt_modified",
                "title": "修改时间",
                "name": "修改时间",
                "type": "DATE",
                "description": "修改时间",
                "sortNum": 14,
                "id": 659538,
                "code": "gmt_modified",
                "extend": "{\"systemRetain\":true,\"logicDelete\":false,\"visible\":true,\"pkField\":false,\"modifyDate\":true,\"autoIncrement\":false,\"rules\":null,\"required\":true,\"options\":null,\"disabled\":true,\"placeholder\":\"系统自动维护\",\"maxLength\":19,\"createDate\":false,\"tooltip\":\"记录最后修改时间，系统自动维护\",\"tableVisible\":false,\"filterVisible\":false}",
                "dataType": "static",
                "idx": true,
                "deleted": false
            }
        ]
    },
    "failed": false
}
```