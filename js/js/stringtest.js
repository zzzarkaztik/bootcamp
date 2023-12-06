function runActivity() {
  //   let x = "pogi pogi pogi pogi pogi";
  //   console.log(x.substring(22, 26));
  //   console.log(x.replace("pogi", "panget"));
  //    console.log(x.replaceAll("pogi", "panget"));

  let y = "0123456789";
  console.log(y.charAt(y.length - 1));
  console.log(y.indexOf("2"));

  for (let i = 0; i < y.length; i++) {
    console.log(i + 1 + ". " + y.charAt(i));
    if (y.charAt(i) == 9) {
      console.log("this is nine");
    }
  }

  //   let z = "CJ,Keith,Rendell,Vance";
  //   let z_array = z.split(",");
  //   console.log(z_array);
}
