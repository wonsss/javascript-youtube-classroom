const ERROR_MESSAGES = Object.freeze({
  EMPTY: '입력된 검색어가 없습니다. 검색어를 입력해주세요.',
  NOT_FOUND: '검색된 결과가 없습니다. 다른 검색어를 입력해주세요.',
  EXCEED_LIMIT: '저장된 영상의 개수가 100개를 초과하여 저장되지 않았습니다. 100개 이하의 영상만 저장해주세요.',
  INSUFFICIENT: '가져온 영상의 데이터가 불충분합니다.',
});

export default ERROR_MESSAGES;
