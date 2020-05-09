function mydata(name, age) {
    let myData = {
        nama : name,
      umur : age,
      adress : "Perum.Pesona Mutiara Tambun Blok A5/21",
      hobbies : ["Main","Design"],
      is_married : 0,
      list_school :[{Nama : "SMKN 1 Tambun Utara",
                     years_in : 2017,
                     years_out : 2020,
                     major : "Elektronika"}],
      skills : [{Skill : "Design",
                 Level : "Advanced"}],
      interest_in_coding : 0
    }
    let json = JSON.stringify(myData);
    return json;
}