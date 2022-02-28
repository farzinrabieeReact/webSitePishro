export const addSpacing = (str) => {
  if (str) {
    let arr = str?.replaceAll(".", "");
    let joy = arr?.match(/.{1,4}/g);
    console.log("joyyyyy", joy.join(" "));
    return joy.join(" ");
  } else {
    return "-";
  }
};
