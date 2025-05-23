const downloadCurriculum = document.getElementById('download-curriculum');

downloadCurriculum.addEventListener('click', () => {
	const link = document.createElement('a');
	link.href = 'https://drive.google.com/file/d/11q5XD1tSe5OH1l-S6UJsFFQWqDZ6an_Y/view?usp=drive_link';
	link.target = '_blank';

	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
});
