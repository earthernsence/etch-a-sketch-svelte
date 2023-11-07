<script lang="ts">
  // Components
  import GridSection from "@/GridSection.svelte";
  import MainLabel from "@/MainLabel.svelte";
  import OptionsBox from "@/OptionsBox.svelte";
  import Alert from "@/Alert.svelte";

  // CSS
  import "../styles/styles.css";
  import "../styles/all.css";
</script>

<body>
  <div>
    <Alert />
  </div>
  <div>
    <MainLabel />
  </div>
  <div>
    <GridSection />
  </div>
  <div>
    <OptionsBox />
  </div>
</body>