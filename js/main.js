/*
  Объект состоит из трёх ключей:

  id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.
  url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться
  description, строка — описание фотографии. Описание придумайте самостоятельно.
  likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
  comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев
   к каждой фотографии вы определяете на своё усмотрение. Все комментарии генерируются случайным образом.
  */

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const MESSAGE = [
  'В целом всё неплохо. Но не всё',
  'Всё отлично!',
];

const DESCRIPTION = [
  'Цветы в вазе',
  'Домик у моря',
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createComment = (index) => {
  const randomNameIndex = getRandomInteger(0, NAMES.length - 1);
  const randomMessageIndex = getRandomInteger(0, MESSAGE.length - 1);
  const randomInt = getRandomInteger(0, 6);

  return {
    id: index,
    avatar: `img/avatar-${randomInt}.svg`,
    message: MESSAGE[randomMessageIndex],
    name: NAMES[randomNameIndex],
  };
};

const createPost = (index) => {
  const randomDescriptionIndex = getRandomInteger(0, DESCRIPTION.length - 1);

  const comments = [];
  for(let i = 1; i <= 5; i++) {
    comments.push(createComment(i + (index - 1) * 5));
  }

  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: DESCRIPTION[randomDescriptionIndex],
    likes: getRandomInteger(15, 200),
    comments: comments,
  };
};


const postList = [];
for(let i = 1; i <= 25; i++) {
  postList.push(createPost(i));
}
