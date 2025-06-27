<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <title>GRRK_秘密主義のお喋り</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <h1>GRRK_秘密主義のお喋り</h1>
    <a href="index.html">← トップに戻る</a>
  </header>

  <main id="gallery"></main>

  <script src="kikaku_GRRK_data.js"></script>
  <script>
    const gallery = document.getElementById("gallery");
    posts.forEach(post => {
      const item = document.createElement("div");
      item.className = "gallery-item";
      const img = document.createElement("img");
      img.src = post.thumbnail;
      img.alt = post.title;
      item.appendChild(img);

      const title = document.createElement("p");
      title.textContent = post.title;
      item.appendChild(title);

      const link = document.createElement("a");
      link.href = post.link;
      link.textContent = "→ 詳細を見る";
      item.appendChild(link);

      gallery.appendChild(item);
    });
  </script>
</body>
</html>
