<template>
  <div id="app" @contextmenu.prevent="$refs.menu.open($event, 'Payload')">
   <ContextMenu ref="menu">
      <template slot-scope="{ contextData }">
        <ContextMenuItem @click.native="$refs.menu.close">
          Action 1 {{ contextData }}
        </ContextMenuItem>
         <ContextMenuItem @click.native="$refs.menu.close">
          Action 2 {{ contextData }}
        </ContextMenuItem>
        <ContextMenuItem @click.native="$refs.menu.close">
          Action 3 {{ contextData }}
        </ContextMenuItem>
         <ContextMenuItem @click.native="$refs.menu.close">
          Action 4 {{ contextData }}
        </ContextMenuItem>
      </template>
    </ContextMenu>
    <img width="25%" src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import ContextMenu from './components/ContextMenu/ContextMenu';
import ContextMenuItem from './components/ContextMenu/ContextMenuItem';
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld,
    ContextMenu,
    ContextMenuItem,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
