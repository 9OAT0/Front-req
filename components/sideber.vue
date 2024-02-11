<template>
    <div class="sideber">
    </div>
</template>

<style>
:root{
    --sidebar-bg-color:#f9fbfa;
    --sidebar-item-hover:#f9fbfa;
    --sideber-itam-active:#f9fbfa;
}

.sideber {
    color: #000;
    background-color: ver(--sidebar-bg-color);
    float: left ;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;
    transition: 0.3 ease;
    
    display: flex;
    flex-direction: column ;

} 
</style>

<script>
import {ref, computed} from 'vue' 

export const collapsed = ref(false)
export const togglesidebar = ()=>(collapsed.value= !collapsed.value)

export const SIDEBER_WIDTH =180
export const SIDEBER_WIDTH_COLLAPSED = 38
export const sideberWidth = computed(
  () => {collapsed.value ? SIDEBER_WIDTH_COLLAPSED : SIDEBER_WIDTH}
 
)
</script>