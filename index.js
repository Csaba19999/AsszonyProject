$(function () {
  $("#szamol").on("click", () => {
    let n = $("#csovekSz").val();
    let l = $("#hossz").val();
    let d = $("#atmero").val();
    let pi = Math.PI;
    $("#eredmeny-szam").text(n * l * d * pi);
    $("#eredmeny-szam").append(' [ m^2 ]');
    console.log("n = "+n+"\n"+
                "l = "+l+"\n"+
                "d = "+d+"\n"+
                "eredmeny = "+
                        (n * l * d * pi));
  });
});