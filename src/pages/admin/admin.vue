<template>
<Nav />
    <div class="wrraper">
        <div class="right-content">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Nav from '@/components/Nav'
export default {
    name : 'admin',
    components: { Nav}
}
</script>

<style>

</style>