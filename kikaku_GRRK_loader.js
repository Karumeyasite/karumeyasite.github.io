fetch('kikaku_GRRK_data.json')
  .then(response => response.json())
  .then(data => {
    data.sort((a, b) => {
      const regex = /(\d+)?(.*)/;
      const [, numA, textA] = a.title.match(regex);
      const [, numB, textB] = b.title.match(regex);
      const nA = parseInt(numA) || 0;
      const nB = parseInt(numB) || 0;
      return nA !== nB ? nA - nB : textA.localeCompare(textB, 'ja');
    });

    const gallery = document.getElementById('gallery');

    data.forEach(item => {
      const div = document.createElement('div');
      div.className = 'item';

      const img = document.createElement('img');
      img.src = `images/${item.filename}`;
      img.alt = item.title;

      const p = document.createElement('p');
      p.textContent = item.title;

      const tagsDiv = document.createElement('div');
      tagsDiv.className = 'tags';
      item.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = tag;
        tagsDiv.appendChild(span);
      });

      div.appendChild(img);
      div.appendChild(p);
      div.appendChild(tagsDiv);
      gallery.appendChild(div);
    });
  })
  .catch(err => console.error('データ読み込みエラー:', err));
