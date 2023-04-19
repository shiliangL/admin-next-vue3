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

// mock/user.js
var user_exports = {};
__export(user_exports, {
  default: () => user_default
});
module.exports = __toCommonJS(user_exports);
var users = [
  {
    name: "admin",
    password: "123456",
    token: "admin",
    info: {
      name: "\u7CFB\u7EDF\u7BA1\u7406\u5458"
    }
  },
  {
    name: "editor",
    password: "123456",
    token: "editor",
    info: {
      name: "\u7F16\u8F91\u4EBA\u5458"
    }
  },
  {
    name: "test",
    password: "123456",
    token: "test",
    info: {
      name: "\u6D4B\u8BD5\u4EBA\u5458"
    }
  }
];
var user_default = [
  {
    url: "/mock/user/login",
    method: "post",
    response: ({ body }) => {
      const user = users.find((user2) => {
        return body.name === user2.name && body.password === user2.password;
      });
      if (user) {
        return {
          code: 200,
          data: {
            token: user.token
          }
        };
      } else {
        return {
          code: 401,
          data: {},
          msg: "\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF"
        };
      }
    }
  },
  {
    url: "/mock/user/info",
    method: "post",
    response: ({ body }) => {
      const { token } = body;
      const info = users.find((user) => {
        return user.token === token;
      }).info;
      if (info) {
        return {
          code: 200,
          data: {
            info
          }
        };
      } else {
        return {
          code: 403,
          data: {},
          msg: "\u65E0\u8BBF\u95EE\u6743\u9650"
        };
      }
    }
  },
  {
    url: "/mock/user/out",
    method: "post",
    response: () => {
      return {
        code: 200,
        data: {},
        msg: "success"
      };
    }
  },
  {
    url: "/mock/user/passwordChange",
    method: "post",
    response: () => {
      return {
        code: 200,
        data: {},
        msg: "success"
      };
    }
  }
];
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay91c2VyLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3IuREVTS1RPUC1SQlJMTzY4XFxcXERlc2t0b3BcXFxcZGV2M1xcXFxhZG1pbi1uZXh0LXZ1ZTNcXFxcbW9ja1xcXFx1c2VyLmpzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3IuREVTS1RPUC1SQlJMTzY4XFxcXERlc2t0b3BcXFxcZGV2M1xcXFxhZG1pbi1uZXh0LXZ1ZTNcXFxcbW9ja1wiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vQzovVXNlcnMvQWRtaW5pc3RyYXRvci5ERVNLVE9QLVJCUkxPNjgvRGVza3RvcC9kZXYzL2FkbWluLW5leHQtdnVlMy9tb2NrL3VzZXIuanNcIjtjb25zdCB1c2VycyA9IFt7XHJcbiAgbmFtZTogJ2FkbWluJyxcclxuICBwYXNzd29yZDogJzEyMzQ1NicsXHJcbiAgdG9rZW46ICdhZG1pbicsXHJcbiAgaW5mbzoge1xyXG4gICAgbmFtZTogJ1x1N0NGQlx1N0VERlx1N0JBMVx1NzQwNlx1NTQ1OCdcclxuICB9XHJcbn0sXHJcbntcclxuICBuYW1lOiAnZWRpdG9yJyxcclxuICBwYXNzd29yZDogJzEyMzQ1NicsXHJcbiAgdG9rZW46ICdlZGl0b3InLFxyXG4gIGluZm86IHtcclxuICAgIG5hbWU6ICdcdTdGMTZcdThGOTFcdTRFQkFcdTU0NTgnXHJcbiAgfVxyXG59LFxyXG57XHJcbiAgbmFtZTogJ3Rlc3QnLFxyXG4gIHBhc3N3b3JkOiAnMTIzNDU2JyxcclxuICB0b2tlbjogJ3Rlc3QnLFxyXG4gIGluZm86IHtcclxuICAgIG5hbWU6ICdcdTZENEJcdThCRDVcdTRFQkFcdTU0NTgnXHJcbiAgfVxyXG59XHJcbl1cclxuZXhwb3J0IGRlZmF1bHQgW3tcclxuICB1cmw6ICcvbW9jay91c2VyL2xvZ2luJyxcclxuICBtZXRob2Q6ICdwb3N0JyxcclxuICByZXNwb25zZTogKHsgYm9keSB9KSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gdXNlcnMuZmluZCh1c2VyID0+IHtcclxuICAgICAgcmV0dXJuIGJvZHkubmFtZSA9PT0gdXNlci5uYW1lICYmIGJvZHkucGFzc3dvcmQgPT09IHVzZXIucGFzc3dvcmRcclxuICAgIH0pXHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvZGU6IDIwMCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB0b2tlbjogdXNlci50b2tlblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjb2RlOiA0MDEsXHJcbiAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgbXNnOiAnXHU3NTI4XHU2MjM3XHU1NDBEXHU2MjE2XHU1QkM2XHU3ODAxXHU5NTE5XHU4QkVGJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59LFxyXG57XHJcbiAgdXJsOiAnL21vY2svdXNlci9pbmZvJyxcclxuICBtZXRob2Q6ICdwb3N0JyxcclxuICByZXNwb25zZTogKHsgYm9keSB9KSA9PiB7XHJcbiAgICBjb25zdCB7IHRva2VuIH0gPSBib2R5XHJcbiAgICBjb25zdCBpbmZvID0gdXNlcnMuZmluZCh1c2VyID0+IHtcclxuICAgICAgcmV0dXJuIHVzZXIudG9rZW4gPT09IHRva2VuXHJcbiAgICB9KS5pbmZvXHJcbiAgICBpZiAoaW5mbykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvZGU6IDIwMCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpbmZvXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvZGU6IDQwMyxcclxuICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICBtc2c6ICdcdTY1RTBcdThCQkZcdTk1RUVcdTY3NDNcdTk2NTAnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0sXHJcbntcclxuICB1cmw6ICcvbW9jay91c2VyL291dCcsXHJcbiAgbWV0aG9kOiAncG9zdCcsXHJcbiAgcmVzcG9uc2U6ICgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvZGU6IDIwMCxcclxuICAgICAgZGF0YToge30sXHJcbiAgICAgIG1zZzogJ3N1Y2Nlc3MnXHJcbiAgICB9XHJcbiAgfVxyXG59LFxyXG57XHJcbiAgdXJsOiAnL21vY2svdXNlci9wYXNzd29yZENoYW5nZScsXHJcbiAgbWV0aG9kOiAncG9zdCcsXHJcbiAgcmVzcG9uc2U6ICgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvZGU6IDIwMCxcclxuICAgICAgZGF0YToge30sXHJcbiAgICAgIG1zZzogJ3N1Y2Nlc3MnXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbl1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc1csSUFBTSxRQUFRO0FBQUEsRUFBQztBQUFBLElBQ25YLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUNBO0FBQ0EsSUFBTyxlQUFRO0FBQUEsRUFBQztBQUFBLElBQ2QsS0FBSztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsVUFBVSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3RCLFlBQU0sT0FBTyxNQUFNLEtBQUssQ0FBQUEsVUFBUTtBQUM5QixlQUFPLEtBQUssU0FBU0EsTUFBSyxRQUFRLEtBQUssYUFBYUEsTUFBSztBQUFBLE1BQzNELENBQUM7QUFDRCxVQUFJLE1BQU07QUFDUixlQUFPO0FBQUEsVUFDTCxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsWUFDSixPQUFPLEtBQUs7QUFBQSxVQUNkO0FBQUEsUUFDRjtBQUFBLE1BQ0YsT0FBTztBQUNMLGVBQU87QUFBQSxVQUNMLE1BQU07QUFBQSxVQUNOLE1BQU0sQ0FBQztBQUFBLFVBQ1AsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxLQUFLO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixVQUFVLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDdEIsWUFBTSxFQUFFLE1BQU0sSUFBSTtBQUNsQixZQUFNLE9BQU8sTUFBTSxLQUFLLFVBQVE7QUFDOUIsZUFBTyxLQUFLLFVBQVU7QUFBQSxNQUN4QixDQUFDLEVBQUU7QUFDSCxVQUFJLE1BQU07QUFDUixlQUFPO0FBQUEsVUFDTCxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsWUFDSjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRixPQUFPO0FBQ0wsZUFBTztBQUFBLFVBQ0wsTUFBTTtBQUFBLFVBQ04sTUFBTSxDQUFDO0FBQUEsVUFDUCxLQUFLO0FBQUEsUUFDUDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLEtBQUs7QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFVBQVUsTUFBTTtBQUNkLGFBQU87QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE1BQU0sQ0FBQztBQUFBLFFBQ1AsS0FBSztBQUFBLE1BQ1A7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLEtBQUs7QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFVBQVUsTUFBTTtBQUNkLGFBQU87QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE1BQU0sQ0FBQztBQUFBLFFBQ1AsS0FBSztBQUFBLE1BQ1A7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNBOyIsCiAgIm5hbWVzIjogWyJ1c2VyIl0KfQo=
