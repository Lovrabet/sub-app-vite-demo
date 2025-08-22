## 业务规则开发

```typescript
[
  {
    "rule": "#DATE_6 != null && #DATE_5 != null && #DATE_6 > #DATE_5",
    "errorMsg": "送货时间必须晚于下单时间"
  },
  {
    "rule": "#DATE_8 != null && #DATE_6 != null && #DATE_8 > #DATE_6",
    "errorMsg": "确认收货时间必须晚于送货时间"
  },
  {
    "rule": "#NUMBER_7 >= 0",
    "errorMsg": "包裹数量必须≥1"
  }
]
```