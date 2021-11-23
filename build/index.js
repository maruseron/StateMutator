import { ObservableStateMutator } from "./src/ObservableStateMutator.js";
/* void incrementPointer(int* pointer) { pointer++; } */
function incrementPointer(pointer) {
    pointer.mut(i => ++i);
}
async function main() {
    const sm = new ObservableStateMutator(5);
    const subscription = sm.subscribe(x => console.log("listened to change:", x));
    incrementPointer(sm);
    console.log(sm.val);
    subscription.unsubscribe();
}
main().then(_ => process.exit(0))
    .catch(_ => process.exit(1));
