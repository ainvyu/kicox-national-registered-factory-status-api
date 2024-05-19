## Installation

```bash
$ yarn install
```
## Preparation Data
1. 공공데이터포털에서 [한국산업단지공단 전국등록공장현황](https://www.data.go.kr/data/15106170/fileData.do#/API%20%EB%AA%A9%EB%A1%9D/getuddi%3Ac5988948-73f2-41dd-af38-c0f1cee398b1) CSV 파일을 다운로드 받거나 또는 다음 명령어로 다운로드 받는다.
```bash
curl -L -o data.csv https://www.data.go.kr/cmm/cmm/fileDownload.do\?atchFileId\=FILE_000000002823266\&fileDetailSn\=1\&dataNm\=%ED%95%9C%EA%B5%AD%EC%82%B0%EC%97%85%EB%8B%A8%EC%A7%80%EA%B3%B5%EB%8B%A8_%EC%A0%84%EA%B5%AD%EB%93%B1%EB%A1%9D%EA%B3%B5%EC%9E%A5%ED%98%84%E
D%99%A9_20200229
```
2. 받은 파일을 `data/data.csv` 로 올긴다.
3. 다음 명령으로 data.csv를 SQLite DB로 변환한다.

```
yarn run command:convert
```

## Running the app

.env.local 파일을 생성해준다.
```bash
touch .env.local
echo 'DB_NAME=kicox.db' >> .env.local
echo 'JWT_SECRET=some_secret' >> .env.local
```

Watch 모드로 실행한다.
```bash
$ yarn run start:dev
```

http://localhost:3000/api 로 접속하면 Swagger 화면에서 테스트를 할 수 있다.
