<template>
  <div>
    <Navbar />
    <Index />
    <Footer />
  </div>
</template>

<script>
// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Index from './components/Index';

export default {
  name: 'App',
  components: { Navbar, Footer, Index },
};
</script>

<style>
body,
html {
  overflow-x: hidden;
}

.letter {
  border-bottom: 3px solid #2980b9;
  display: inline-flex;
  font-size: 24px;
  align-items: center;
  justify-content: center;
  margin: 0 3px;
  height: 40px;
  width: 20px;
}
</style>
