<template>
  <div class="auth-header ">
    <div
      class="d-block d-sm-flex align-sm-center"
      style=""
    >
      <p class="d-block flex-sm-shrink-0 mt-1">
        {{ title }}
      </p>
      <img
        v-if="showLogo"
        class="object-fit-cover img-size ml-sm-3 mt-3"
        style="width: 120px;"
        src="@/assets/logo/logo02.svg"
        alt="ticket"
      >
    </div>
  </div>
<!--  <div class="auth-header">-->
<!--    <v-row-->
<!--      no-gutters-->
<!--      style="margin: 16px"-->
<!--    >-->
<!--      <div class="one">-->
<!--        <div>-->
<!--          <p-->
<!--            style=""-->
<!--          >-->
<!--            Bienvenido a-->
<!--          </p>-->
<!--        </div>-->
<!--        <div-->
<!--          class="logo"-->
<!--        >-->
<!--          <v-img-->
<!--            :src="require(`@/assets/ticket_blue.png`)"-->
<!--            width="100%"-->
<!--          />-->
<!--        </div>-->
<!--      </div>-->
<!--    </v-row>-->
<!--  </div>-->
</template>

<script>
  export default {
    name: 'AuthHeader',
    props: {
      title: {
        type: String,
        default: '',
      },
      showLogo: {
        type: Boolean,
        default: false,
      },
    },
    data () {
      return {
        appIcon: '@assets/ticket-rounded.png',
      }
    },
  }
</script>

<style lang="scss" scoped>
.auth-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  //width: 100%;
  margin-bottom: 20px;
  //.logo {
  //  margin-left: 16px;
  //  max-width: 120px;
  //  max-height: 60px;
  //}
}
p {
  margin-bottom: -9px;
  color: #1e66b0;
  font-size: 24px;
  font-weight: bold;
}
//.one {
//    display: flex;
//    align-items: end;
//}
</style>
