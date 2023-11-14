# woof-meow-frontend

## 개발

### convention

#### git commit convention

feat : 새로운 기능에 대한 커밋  
fix : 버그 수정에 대한 커밋  
build : 빌드 관련 파일 수정에 대한 커밋  
chore : 그 외 자잘한 수정에 대한 커밋  
ci : CI관련 설정 수정에 대한 커밋  
docs : 문서 수정에 대한 커밋  
style : 코드 스타일 혹은 포맷 등에 관한 커밋  
refactor : 코드 리팩토링에 대한 커밋  
test : 테스트 코드 수정에 대한 커밋  
setting : 환경 셋팅에 대한 커밋

#### naming convention

- 컴포넌트를 정의할 때

```javascript
function 컴포넌트이름() {}
export default 컴포넌트이름;
```

### 스타일

[Chakra ui](https://chakra-ui.com/) + CSS Module

### 상태 관리

[Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) + [React Query](https://tanstack.com/query/v3/docs/react/overview)
