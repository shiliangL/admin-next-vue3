<script>
import { useRouter } from "vue-router";
import { defineComponent, unref,h } from "vue";

export default defineComponent({
  name: "AppRedirect",
  setup() {
    const { currentRoute, replace } = useRouter();
    const { params, query } = unref(currentRoute);
    const { path } = params;
    const _path = Array.isArray(path) ? path.join("/") : path;
    replace({ path: "/" + _path, query });
    return ()=> h('div');
  }
});
</script>