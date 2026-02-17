
// synchronous // blocking ilaa oo asiga shaqadiisa ka soo dhameesto cikale ma loo qudbaayo

function fetchUserDataSync(){
  alert("Fetching user  data");
  return {id: 1, name: "john Smith"}
}

console.log('Starting fetching user date');

const user = fetchUserDataSync();

console.log("User data ", user);

console.log("This message is blocked until user date is fetched.")



