// Create a deep nested object
const originalObject = {
  level1: {
    level2: {
      level3: {
        level4: {
          value: "This is a deep nested value",
        },
      },
    },
  },
};

// Copy the object using structuredClone
const clonedObject = structuredClone(originalObject);

// Verify the clone
console.log(clonedObject);
// Verify the original object
console.log(originalObject);

originalObject.level1.level2.level3.level4.value = "This is a modified value";

// Verify the clone
console.log(clonedObject);
// Verify the original object
console.log(originalObject);
