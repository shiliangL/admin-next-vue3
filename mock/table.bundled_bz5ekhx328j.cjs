var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// mock/table.js
var table_exports = {};
__export(table_exports, {
  default: () => table_default
});
module.exports = __toCommonJS(table_exports);
var table_default = [
  {
    url: "/mock/table/list",
    method: "post",
    response: ({ body }) => {
      const { pageSize } = body;
      return {
        code: 200,
        data: {
          [`list|${pageSize}`]: [{
            "id|+1": 0,
            age: "@age",
            name: "@cname",
            nickname: "@name",
            email: "@email",
            role: "@role",
            amount: "@amount",
            updateDate: "@date",
            createDate: "@date",
            "number|+1": 500,
            "choose|1": [1, 2, 3, 4],
            "radio|1": [1, 2, 3]
          }]
          // pager: {
          //   page,
          //   pageSize,
          //   total: 198
          // }
        },
        msg: ""
      };
    }
  },
  {
    url: "/mock/table/page",
    method: "post",
    response: ({ body }) => {
      const { page, pageSize } = body;
      return {
        code: 200,
        data: {
          [`result|${pageSize}`]: [{
            "id|+1": 0,
            age: "@age",
            name: "@cname",
            nickname: "@name",
            email: "@email",
            role: "@role",
            amount: "@amount",
            updateDate: "@date",
            createDate: "@date",
            "number|+1": 500,
            "choose|1": [1, 2, 3, 4],
            "radio|1": [1, 2, 3]
          }],
          pager: {
            page,
            pageSize,
            total: 198
          }
        },
        msg: ""
      };
    }
  },
  {
    url: "/mock/table/category",
    method: "post",
    response: ({ body }) => {
      const { page, pageSize } = body;
      return {
        code: 200,
        data: {
          [`list|${pageSize}`]: [{
            "id|+1": 100 * page,
            name: "@ctitle"
          }],
          pager: {
            page,
            pageSize,
            total: 100
          }
        },
        msg: ""
      };
    }
  },
  {
    url: "/mock/table/tree",
    method: "post",
    response: ({ body }) => {
      return {
        code: 200,
        data: [{
          label: "\u4EBA\u4E8B\u90E8",
          id: 1,
          "children|5": [{
            label: "@cname",
            "id|+1": 10
          }]
        }, {
          label: "\u7814\u53D1\u90E8",
          id: 2,
          children: [{
            label: "\u524D\u7AEF",
            id: 3,
            "children|5": [{
              label: "@cname",
              "id|+1": 20
            }]
          }, {
            label: "\u540E\u7AEF",
            id: 4,
            "children|5": [{
              label: "@cname",
              "id|+1": 30
            }]
          }]
        }, {
          label: "\u8FD0\u8425\u90E8",
          id: 5,
          children: [{
            label: "\u5E02\u573A\u8FD0\u8425",
            id: 6,
            "children|5": [{
              label: "@cname",
              "id|+1": 40
            }]
          }, {
            label: "\u4E92\u8054\u7F51\u8425\u9500",
            id: 7,
            "children|5": [{
              label: "@cname",
              "id|+1": 50
            }]
          }]
        }],
        msg: ""
      };
    }
  },
  {
    url: "/mock/table/add",
    method: "post",
    response: ({ body }) => {
      return {
        code: 200,
        data: {},
        msg: ""
      };
    }
  },
  {
    url: "/mock/table/update",
    method: "post",
    response: ({ body }) => {
      return {
        code: 200,
        data: {},
        msg: ""
      };
    }
  },
  {
    url: "/mock/table/del",
    method: "post",
    response: ({ body }) => {
      return {
        code: 200,
        data: {},
        msg: ""
      };
    }
  }
];
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay90YWJsZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yLkRFU0tUT1AtUkJSTE82OFxcXFxEZXNrdG9wXFxcXGRldjNcXFxcYWRtaW4tbmV4dC12dWUzXFxcXG1vY2tcXFxcdGFibGUuanNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvci5ERVNLVE9QLVJCUkxPNjhcXFxcRGVza3RvcFxcXFxkZXYzXFxcXGFkbWluLW5leHQtdnVlM1xcXFxtb2NrXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9DOi9Vc2Vycy9BZG1pbmlzdHJhdG9yLkRFU0tUT1AtUkJSTE82OC9EZXNrdG9wL2RldjMvYWRtaW4tbmV4dC12dWUzL21vY2svdGFibGUuanNcIjtleHBvcnQgZGVmYXVsdCBbe1xyXG4gIHVybDogJy9tb2NrL3RhYmxlL2xpc3QnLFxyXG4gIG1ldGhvZDogJ3Bvc3QnLFxyXG4gIHJlc3BvbnNlOiAoeyBib2R5IH0pID0+IHtcclxuICAgIGNvbnN0IHsgcGFnZVNpemUgfSA9IGJvZHlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvZGU6IDIwMCxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIFtgbGlzdHwke3BhZ2VTaXplfWBdOiBbe1xyXG4gICAgICAgICAgJ2lkfCsxJzogMCxcclxuICAgICAgICAgIGFnZTogJ0BhZ2UnLFxyXG4gICAgICAgICAgbmFtZTogJ0BjbmFtZScsXHJcbiAgICAgICAgICBuaWNrbmFtZTogJ0BuYW1lJyxcclxuICAgICAgICAgIGVtYWlsOiAnQGVtYWlsJyxcclxuICAgICAgICAgIHJvbGU6ICdAcm9sZScsXHJcbiAgICAgICAgICBhbW91bnQ6ICdAYW1vdW50JyxcclxuICAgICAgICAgIHVwZGF0ZURhdGU6ICdAZGF0ZScsXHJcbiAgICAgICAgICBjcmVhdGVEYXRlOiAnQGRhdGUnLFxyXG4gICAgICAgICAgJ251bWJlcnwrMSc6IDUwMCxcclxuICAgICAgICAgICdjaG9vc2V8MSc6IFsxLCAyLCAzLCA0XSxcclxuICAgICAgICAgICdyYWRpb3wxJzogWzEsIDIsIDNdXHJcbiAgICAgICAgfV1cclxuICAgICAgICAvLyBwYWdlcjoge1xyXG4gICAgICAgIC8vICAgcGFnZSxcclxuICAgICAgICAvLyAgIHBhZ2VTaXplLFxyXG4gICAgICAgIC8vICAgdG90YWw6IDE5OFxyXG4gICAgICAgIC8vIH1cclxuICAgICAgfSxcclxuICAgICAgbXNnOiAnJ1xyXG4gICAgfVxyXG4gIH1cclxufSxcclxue1xyXG4gIHVybDogJy9tb2NrL3RhYmxlL3BhZ2UnLFxyXG4gIG1ldGhvZDogJ3Bvc3QnLFxyXG4gIHJlc3BvbnNlOiAoeyBib2R5IH0pID0+IHtcclxuICAgIGNvbnN0IHsgcGFnZSwgcGFnZVNpemUgfSA9IGJvZHlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvZGU6IDIwMCxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIFtgcmVzdWx0fCR7cGFnZVNpemV9YF06IFt7XHJcbiAgICAgICAgICAnaWR8KzEnOiAwLFxyXG4gICAgICAgICAgYWdlOiAnQGFnZScsXHJcbiAgICAgICAgICBuYW1lOiAnQGNuYW1lJyxcclxuICAgICAgICAgIG5pY2tuYW1lOiAnQG5hbWUnLFxyXG4gICAgICAgICAgZW1haWw6ICdAZW1haWwnLFxyXG4gICAgICAgICAgcm9sZTogJ0Byb2xlJyxcclxuICAgICAgICAgIGFtb3VudDogJ0BhbW91bnQnLFxyXG4gICAgICAgICAgdXBkYXRlRGF0ZTogJ0BkYXRlJyxcclxuICAgICAgICAgIGNyZWF0ZURhdGU6ICdAZGF0ZScsXHJcbiAgICAgICAgICAnbnVtYmVyfCsxJzogNTAwLFxyXG4gICAgICAgICAgJ2Nob29zZXwxJzogWzEsIDIsIDMsIDRdLFxyXG4gICAgICAgICAgJ3JhZGlvfDEnOiBbMSwgMiwgM11cclxuICAgICAgICB9XSxcclxuICAgICAgICBwYWdlcjoge1xyXG4gICAgICAgICAgcGFnZSxcclxuICAgICAgICAgIHBhZ2VTaXplLFxyXG4gICAgICAgICAgdG90YWw6IDE5OFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbXNnOiAnJ1xyXG4gICAgfVxyXG4gIH1cclxufSxcclxue1xyXG4gIHVybDogJy9tb2NrL3RhYmxlL2NhdGVnb3J5JyxcclxuICBtZXRob2Q6ICdwb3N0JyxcclxuICByZXNwb25zZTogKHsgYm9keSB9KSA9PiB7XHJcbiAgICBjb25zdCB7IHBhZ2UsIHBhZ2VTaXplIH0gPSBib2R5XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb2RlOiAyMDAsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBbYGxpc3R8JHtwYWdlU2l6ZX1gXTogW3tcclxuICAgICAgICAgICdpZHwrMSc6IDEwMCAqIHBhZ2UsXHJcbiAgICAgICAgICBuYW1lOiAnQGN0aXRsZSdcclxuICAgICAgICB9XSxcclxuICAgICAgICBwYWdlcjoge1xyXG4gICAgICAgICAgcGFnZSxcclxuICAgICAgICAgIHBhZ2VTaXplLFxyXG4gICAgICAgICAgdG90YWw6IDEwMFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbXNnOiAnJ1xyXG4gICAgfVxyXG4gIH1cclxufSxcclxue1xyXG4gIHVybDogJy9tb2NrL3RhYmxlL3RyZWUnLFxyXG4gIG1ldGhvZDogJ3Bvc3QnLFxyXG4gIHJlc3BvbnNlOiAoeyBib2R5IH0pID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvZGU6IDIwMCxcclxuICAgICAgZGF0YTogW3tcclxuICAgICAgICBsYWJlbDogJ1x1NEVCQVx1NEU4Qlx1OTBFOCcsXHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgJ2NoaWxkcmVufDUnOiBbe1xyXG4gICAgICAgICAgbGFiZWw6ICdAY25hbWUnLFxyXG4gICAgICAgICAgJ2lkfCsxJzogMTBcclxuICAgICAgICB9XVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgbGFiZWw6ICdcdTc4MTRcdTUzRDFcdTkwRTgnLFxyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbe1xyXG4gICAgICAgICAgbGFiZWw6ICdcdTUyNERcdTdBRUYnLFxyXG4gICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICAnY2hpbGRyZW58NSc6IFt7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnQGNuYW1lJyxcclxuICAgICAgICAgICAgJ2lkfCsxJzogMjBcclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgbGFiZWw6ICdcdTU0MEVcdTdBRUYnLFxyXG4gICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICAnY2hpbGRyZW58NSc6IFt7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnQGNuYW1lJyxcclxuICAgICAgICAgICAgJ2lkfCsxJzogMzBcclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgfV1cclxuICAgICAgfSwge1xyXG4gICAgICAgIGxhYmVsOiAnXHU4RkQwXHU4NDI1XHU5MEU4JyxcclxuICAgICAgICBpZDogNSxcclxuICAgICAgICBjaGlsZHJlbjogW3tcclxuICAgICAgICAgIGxhYmVsOiAnXHU1RTAyXHU1NzNBXHU4RkQwXHU4NDI1JyxcclxuICAgICAgICAgIGlkOiA2LFxyXG4gICAgICAgICAgJ2NoaWxkcmVufDUnOiBbe1xyXG4gICAgICAgICAgICBsYWJlbDogJ0BjbmFtZScsXHJcbiAgICAgICAgICAgICdpZHwrMSc6IDQwXHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGxhYmVsOiAnXHU0RTkyXHU4MDU0XHU3RjUxXHU4NDI1XHU5NTAwJyxcclxuICAgICAgICAgIGlkOiA3LFxyXG4gICAgICAgICAgJ2NoaWxkcmVufDUnOiBbe1xyXG4gICAgICAgICAgICBsYWJlbDogJ0BjbmFtZScsXHJcbiAgICAgICAgICAgICdpZHwrMSc6IDUwXHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH1dXHJcbiAgICAgIH1dLFxyXG4gICAgICBtc2c6ICcnXHJcbiAgICB9XHJcbiAgfVxyXG59LFxyXG57XHJcbiAgdXJsOiAnL21vY2svdGFibGUvYWRkJyxcclxuICBtZXRob2Q6ICdwb3N0JyxcclxuICByZXNwb25zZTogKHsgYm9keSB9KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb2RlOiAyMDAsXHJcbiAgICAgIGRhdGE6IHt9LFxyXG4gICAgICBtc2c6ICcnXHJcbiAgICB9XHJcbiAgfVxyXG59LFxyXG57XHJcbiAgdXJsOiAnL21vY2svdGFibGUvdXBkYXRlJyxcclxuICBtZXRob2Q6ICdwb3N0JyxcclxuICByZXNwb25zZTogKHsgYm9keSB9KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb2RlOiAyMDAsXHJcbiAgICAgIGRhdGE6IHt9LFxyXG4gICAgICBtc2c6ICcnXHJcbiAgICB9XHJcbiAgfVxyXG59LFxyXG57XHJcbiAgdXJsOiAnL21vY2svdGFibGUvZGVsJyxcclxuICBtZXRob2Q6ICdwb3N0JyxcclxuICByZXNwb25zZTogKHsgYm9keSB9KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb2RlOiAyMDAsXHJcbiAgICAgIGRhdGE6IHt9LFxyXG4gICAgICBtc2c6ICcnXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbl1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd1csSUFBTyxnQkFBUTtBQUFBLEVBQUM7QUFBQSxJQUN0WCxLQUFLO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixVQUFVLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDdEIsWUFBTSxFQUFFLFNBQVMsSUFBSTtBQUNyQixhQUFPO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsVUFDSixD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
