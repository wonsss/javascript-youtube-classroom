import dummyObject from './dummy/dummyObject.js';
import Video from './models/Video.js';
import { on } from './utils/event.js';

import AppView from './views/AppView.js';
import SearchInputView from './views/SearchInputView.js';
import SearchResultView from './views/SearchResultView.js';

export default class Controller {
  constructor() {
    this.video = new Video(dummyObject);
    this.appView = new AppView();
    this.searchInputView = new SearchInputView();
    this.searchResultView = new SearchResultView();
    this.#subscribeViewEvents();
  }

  #subscribeViewEvents() {
    on(this.searchInputView.$searchButton, '@search', this.#searchVideo.bind(this));
    on(this.searchResultView.$searchTarget, '@scroll-bottom', this.#scrollNextVideos.bind(this));
    on(this.searchResultView.$searchTarget, '@save-video', this.#saveVideo.bind(this));
  }

  // 검색 버튼을 눌렀을 때
  async #searchVideo(event) {
    this.searchResultView.removeVideo();
    const { keyword } = event.detail;
    this.video.keyword = keyword;
    this.searchResultView.showSkeleton();
    await this.video.fetchYoutubeApi(keyword);
    this.video.setVideoInfo(); // 신병 10개
    this.video.accumulateVideoItems();
    // update -> newVideoItems (localItem{videoId} , item{},)
    this.searchResultView.renderVideo(this.video.newVideoItems);
    this.searchResultView.startObserve();
  }

  // (이미 검색버튼을 눌러진 상태) 스크롤 내림으로써 발생하는 추가 fetch, render
  async #scrollNextVideos() {
    this.searchResultView.stopObserve();
    this.searchResultView.showSkeleton();
    await this.video.fetchYoutubeApi(this.video.keyword, this.video.nextPageToken);
    this.video.setVideoInfo();
    this.video.accumulateVideoItems();
    // update -> newVideoItems (localItem{videoId} , item{},)

    this.searchResultView.renderVideo(this.video.newVideoItems);
    this.searchResultView.startObserve();
  }

  #saveVideo(event) {
    if (this.video.savedVideoItems.length >= 100) {
      alert('저장된 영상의 개수가 100개를 초과하여 저장되지 않았습니다. 100개 이하의 영상만 저장해주세요.');
      return;
    }
    this.searchResultView.changeSaveButtonStyle(event.detail.buttonElement);
    const { savedId } = event.detail;
    console.log('newSavedIdList', savedId);
    this.video.setItemsLocalStorage(savedId);
  }
}
