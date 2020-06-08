<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <navHeader @pageWasChanged="currentPage = $event">
          <!-- <keep-alive>
            <component :is="currentPage"></component>
          </keep-alive>-->
        </navHeader>
        <keep-alive>
          <component :is="currentPage"></component>
        </keep-alive>
        <ccFooter>
          <p class="text-center">&copy; Creative Cards</p>
          <nav>
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">About us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Contact us</a>
              </li>
            </ul>
          </nav>
        </ccFooter>

        <!-- THIS IS WHAT COMPONENT :IS="CURRENTPAGE" IS SHOWING -->
        <!-- <cardFront></cardFront> -->
        <!-- <cardInsideLeft> </cardInsideLeft> -->
        <!-- <cardInsideRight></cardInsideRight> -->
        <!-- <cardBack></cardBack> -->
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import CardFront from "./components/card/CardFront.vue";
import CardInsideLeft from "./components/card/CardInsideLeft.vue";
import CardInsideRight from "./components/card/CardInsideRight.vue";
import CardBack from "./components/card/CardBack.vue";
import Footer from "./components/Footer.vue";

export default {
  data: function() {
    return {
      // we reference to the key from the component
      currentPage: "cardFront"
    };
  },
  components: {
    // key will be what will be referenced to
    // value has to be the same as import *** from...
    navHeader: Header,
    cardFront: CardFront,
    cardInsideLeft: CardInsideLeft,
    cardInsideRight: CardInsideRight,
    cardBack: CardBack,
    ccFooter: Footer
  }
};
</script>

<style>
body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #333;
}
</style>
