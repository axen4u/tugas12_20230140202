function kirimData(event) {
  event.preventDefault(); // Cegah reload form

  // Ambil nilai dari inputan
  var name = document.getElementById("nama").value.trim();
  var nim = document.getElementById("nim").value.trim();
  var peminatanChecked = document.querySelector(
    "input[name=peminatan]:checked"
  );
  var alamat = document.getElementById("alamat").value.trim();

  // Validasi
  if (name === "") {
    alert("Nama harus diisi.");
    return;
  }

  if (nim === "") {
    alert("NIM harus diisi.");
    return;
  }

  if (!peminatanChecked) {
    alert("Silakan pilih salah satu peminatan.");
    return;
  }

  if (alamat === "") {
    alert("Alamat tidak boleh kosong.");
    return;
  }

  // Ambil nilai peminatan
  var peminatan = peminatanChecked.value;

  // Tampilkan hasilnya
  alert(
    "Nama       : " +
      name +
      "\nNIM        : " +
      nim +
      "\nPeminatan  : " +
      peminatan +
      "\nAlamat     : " +
      alamat
  );
}
