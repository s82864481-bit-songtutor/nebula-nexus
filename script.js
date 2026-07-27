function showInfo(name, info) {
  document.getElementById('pname').innerText = name;
  document.getElementById('pinfo').innerText = info;
}
function showTab(tab) {
  ['solar','exo','messier','facts'].forEach(id => 
    document.getElementById(id).style.display = 'none'
  );
  document.getElementById(tab).style.display = 'block';
}
