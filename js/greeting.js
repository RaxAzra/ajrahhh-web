function getGreeting() {
  const hour = new Date().getHours();
  return hour >= 4 && hour < 10 ? "Good morning 👏🏻" :
         hour >= 10 && hour < 15 ? "Good afternoon 👏🏻" :
         hour >= 15 && hour < 18 ? "Good evening 👏🏻" :
         "Good night 👏🏻";
}
