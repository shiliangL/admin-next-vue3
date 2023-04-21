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
    method: "get",
    response: ({ body }) => {
      const { pageSize } = body || {};
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
    method: "get",
    response: ({ body }) => {
      const { page, pageSize } = body || {};
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
    method: "get",
    response: ({ body }) => {
      const { page, pageSize } = body || {};
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
    method: "get",
    response: () => {
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
    method: "get",
    response: () => {
      return {
        code: 200,
        data: {},
        msg: ""
      };
    }
  },
  {
    url: "/mock/table/update",
    method: "get",
    response: () => {
      return {
        code: 200,
        data: {},
        msg: ""
      };
    }
  },
  {
    url: "/mock/table/del",
    method: "get",
    response: () => {
      return {
        code: 200,
        data: {},
        msg: ""
      };
    }
  }
];
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay90YWJsZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCJEOlxcXFxzaGlsaWFuZ2xcXFxcYWRtaW4tbmV4dC12dWUzXFxcXG1vY2tcXFxcdGFibGUuanNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiRDpcXFxcc2hpbGlhbmdsXFxcXGFkbWluLW5leHQtdnVlM1xcXFxtb2NrXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9EOi9zaGlsaWFuZ2wvYWRtaW4tbmV4dC12dWUzL21vY2svdGFibGUuanNcIjtleHBvcnQgZGVmYXVsdCBbe1xyXG4gIHVybDogJy9tb2NrL3RhYmxlL2xpc3QnLFxyXG4gIG1ldGhvZDogJ2dldCcsXHJcbiAgcmVzcG9uc2U6ICh7IGJvZHkgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBwYWdlU2l6ZSB9ID0gYm9keSB8fCB7fVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29kZTogMjAwLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgW2BsaXN0fCR7cGFnZVNpemV9YF06IFt7XHJcbiAgICAgICAgICAnaWR8KzEnOiAwLFxyXG4gICAgICAgICAgYWdlOiAnQGFnZScsXHJcbiAgICAgICAgICBuYW1lOiAnQGNuYW1lJyxcclxuICAgICAgICAgIG5pY2tuYW1lOiAnQG5hbWUnLFxyXG4gICAgICAgICAgZW1haWw6ICdAZW1haWwnLFxyXG4gICAgICAgICAgcm9sZTogJ0Byb2xlJyxcclxuICAgICAgICAgIGFtb3VudDogJ0BhbW91bnQnLFxyXG4gICAgICAgICAgdXBkYXRlRGF0ZTogJ0BkYXRlJyxcclxuICAgICAgICAgIGNyZWF0ZURhdGU6ICdAZGF0ZScsXHJcbiAgICAgICAgICAnbnVtYmVyfCsxJzogNTAwLFxyXG4gICAgICAgICAgJ2Nob29zZXwxJzogWzEsIDIsIDMsIDRdLFxyXG4gICAgICAgICAgJ3JhZGlvfDEnOiBbMSwgMiwgM11cclxuICAgICAgICB9XVxyXG4gICAgICAgIC8vIHBhZ2VyOiB7XHJcbiAgICAgICAgLy8gICBwYWdlLFxyXG4gICAgICAgIC8vICAgcGFnZVNpemUsXHJcbiAgICAgICAgLy8gICB0b3RhbDogMTk4XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9LFxyXG4gICAgICBtc2c6ICcnXHJcbiAgICB9XHJcbiAgfVxyXG59LFxyXG57XHJcbiAgdXJsOiAnL21vY2svdGFibGUvcGFnZScsXHJcbiAgbWV0aG9kOiAnZ2V0JyxcclxuICByZXNwb25zZTogKHsgYm9keSB9KSA9PiB7XHJcbiAgICBjb25zdCB7IHBhZ2UsIHBhZ2VTaXplIH0gPSBib2R5IHx8IHt9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb2RlOiAyMDAsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBbYHJlc3VsdHwke3BhZ2VTaXplfWBdOiBbe1xyXG4gICAgICAgICAgJ2lkfCsxJzogMCxcclxuICAgICAgICAgIGFnZTogJ0BhZ2UnLFxyXG4gICAgICAgICAgbmFtZTogJ0BjbmFtZScsXHJcbiAgICAgICAgICBuaWNrbmFtZTogJ0BuYW1lJyxcclxuICAgICAgICAgIGVtYWlsOiAnQGVtYWlsJyxcclxuICAgICAgICAgIHJvbGU6ICdAcm9sZScsXHJcbiAgICAgICAgICBhbW91bnQ6ICdAYW1vdW50JyxcclxuICAgICAgICAgIHVwZGF0ZURhdGU6ICdAZGF0ZScsXHJcbiAgICAgICAgICBjcmVhdGVEYXRlOiAnQGRhdGUnLFxyXG4gICAgICAgICAgJ251bWJlcnwrMSc6IDUwMCxcclxuICAgICAgICAgICdjaG9vc2V8MSc6IFsxLCAyLCAzLCA0XSxcclxuICAgICAgICAgICdyYWRpb3wxJzogWzEsIDIsIDNdXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgcGFnZXI6IHtcclxuICAgICAgICAgIHBhZ2UsXHJcbiAgICAgICAgICBwYWdlU2l6ZSxcclxuICAgICAgICAgIHRvdGFsOiAxOThcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1zZzogJydcclxuICAgIH1cclxuICB9XHJcbn0sXHJcbntcclxuICB1cmw6ICcvbW9jay90YWJsZS9jYXRlZ29yeScsXHJcbiAgbWV0aG9kOiAnZ2V0JyxcclxuICByZXNwb25zZTogKHsgYm9keSB9KSA9PiB7XHJcbiAgICBjb25zdCB7IHBhZ2UsIHBhZ2VTaXplIH0gPSBib2R5IHx8IHt9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb2RlOiAyMDAsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBbYGxpc3R8JHtwYWdlU2l6ZX1gXTogW3tcclxuICAgICAgICAgICdpZHwrMSc6IDEwMCAqIHBhZ2UsXHJcbiAgICAgICAgICBuYW1lOiAnQGN0aXRsZSdcclxuICAgICAgICB9XSxcclxuICAgICAgICBwYWdlcjoge1xyXG4gICAgICAgICAgcGFnZSxcclxuICAgICAgICAgIHBhZ2VTaXplLFxyXG4gICAgICAgICAgdG90YWw6IDEwMFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbXNnOiAnJ1xyXG4gICAgfVxyXG4gIH1cclxufSxcclxue1xyXG4gIHVybDogJy9tb2NrL3RhYmxlL3RyZWUnLFxyXG4gIG1ldGhvZDogJ2dldCcsXHJcbiAgcmVzcG9uc2U6ICgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvZGU6IDIwMCxcclxuICAgICAgZGF0YTogW3tcclxuICAgICAgICBsYWJlbDogJ1x1NEVCQVx1NEU4Qlx1OTBFOCcsXHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgJ2NoaWxkcmVufDUnOiBbe1xyXG4gICAgICAgICAgbGFiZWw6ICdAY25hbWUnLFxyXG4gICAgICAgICAgJ2lkfCsxJzogMTBcclxuICAgICAgICB9XVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgbGFiZWw6ICdcdTc4MTRcdTUzRDFcdTkwRTgnLFxyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbe1xyXG4gICAgICAgICAgbGFiZWw6ICdcdTUyNERcdTdBRUYnLFxyXG4gICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICAnY2hpbGRyZW58NSc6IFt7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnQGNuYW1lJyxcclxuICAgICAgICAgICAgJ2lkfCsxJzogMjBcclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgbGFiZWw6ICdcdTU0MEVcdTdBRUYnLFxyXG4gICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICAnY2hpbGRyZW58NSc6IFt7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnQGNuYW1lJyxcclxuICAgICAgICAgICAgJ2lkfCsxJzogMzBcclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgfV1cclxuICAgICAgfSwge1xyXG4gICAgICAgIGxhYmVsOiAnXHU4RkQwXHU4NDI1XHU5MEU4JyxcclxuICAgICAgICBpZDogNSxcclxuICAgICAgICBjaGlsZHJlbjogW3tcclxuICAgICAgICAgIGxhYmVsOiAnXHU1RTAyXHU1NzNBXHU4RkQwXHU4NDI1JyxcclxuICAgICAgICAgIGlkOiA2LFxyXG4gICAgICAgICAgJ2NoaWxkcmVufDUnOiBbe1xyXG4gICAgICAgICAgICBsYWJlbDogJ0BjbmFtZScsXHJcbiAgICAgICAgICAgICdpZHwrMSc6IDQwXHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGxhYmVsOiAnXHU0RTkyXHU4MDU0XHU3RjUxXHU4NDI1XHU5NTAwJyxcclxuICAgICAgICAgIGlkOiA3LFxyXG4gICAgICAgICAgJ2NoaWxkcmVufDUnOiBbe1xyXG4gICAgICAgICAgICBsYWJlbDogJ0BjbmFtZScsXHJcbiAgICAgICAgICAgICdpZHwrMSc6IDUwXHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH1dXHJcbiAgICAgIH1dLFxyXG4gICAgICBtc2c6ICcnXHJcbiAgICB9XHJcbiAgfVxyXG59LFxyXG57XHJcbiAgdXJsOiAnL21vY2svdGFibGUvYWRkJyxcclxuICBtZXRob2Q6ICdnZXQnLFxyXG4gIHJlc3BvbnNlOiAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb2RlOiAyMDAsXHJcbiAgICAgIGRhdGE6IHt9LFxyXG4gICAgICBtc2c6ICcnXHJcbiAgICB9XHJcbiAgfVxyXG59LFxyXG57XHJcbiAgdXJsOiAnL21vY2svdGFibGUvdXBkYXRlJyxcclxuICBtZXRob2Q6ICdnZXQnLFxyXG4gIHJlc3BvbnNlOiAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb2RlOiAyMDAsXHJcbiAgICAgIGRhdGE6IHt9LFxyXG4gICAgICBtc2c6ICcnXHJcbiAgICB9XHJcbiAgfVxyXG59LFxyXG57XHJcbiAgdXJsOiAnL21vY2svdGFibGUvZGVsJyxcclxuICBtZXRob2Q6ICdnZXQnLFxyXG4gIHJlc3BvbnNlOiAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb2RlOiAyMDAsXHJcbiAgICAgIGRhdGE6IHt9LFxyXG4gICAgICBtc2c6ICcnXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbl1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNk8sSUFBTyxnQkFBUTtBQUFBLEVBQUM7QUFBQSxJQUMzUCxLQUFLO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixVQUFVLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDdEIsWUFBTSxFQUFFLFNBQVMsSUFBSSxRQUFRLENBQUM7QUFDOUIsYUFBTztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFVBQ0osQ0FBQyxRQUFRLFVBQVUsR0FBRyxDQUFDO0FBQUEsWUFDckIsU0FBUztBQUFBLFlBQ1QsS0FBSztBQUFBLFlBQ0wsTUFBTTtBQUFBLFlBQ04sVUFBVTtBQUFBLFlBQ1YsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sUUFBUTtBQUFBLFlBQ1IsWUFBWTtB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
