const gitDate = () => document.getElementById('date').textContent = new Date().toLocaleString();
setInterval(gitDate, 1000);
gitDate();