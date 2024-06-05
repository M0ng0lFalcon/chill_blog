<template>
    <div>
        <ButtonBlock website = "https://blog.csdn.net/YUSHI_wind?spm=1018.2226.3001.5343" sitename="csdn" introduce="学习笔记" imgsite="../../public/csdnlogo.jpg"/>
        <ButtonBlock website = "https://www.zhihu.com/people/F4lc0n" sitename="知乎" introduce="不懂就问" imgsite="../../public/zhihulogo.jpg"/>
        <ButtonBlock website = "https://space.bilibili.com/162901193?spm_id_from=333.1007.0.0" sitename="b站" introduce="billbill大学" imgsite="../../public/billlogo.jpg"/>
    </div>
</template>

<script>
    import ButtonBlock from "../components/ButtonBlock.vue"
    export default {
        components:{
            ButtonBlock,
        }
    }
</script>