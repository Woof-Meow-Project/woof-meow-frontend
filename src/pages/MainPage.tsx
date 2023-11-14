function MainPage() {
  console.log(import.meta.env);

  return <div>메인페이지{import.meta.env.VITE_APP_ENV}</div>;
}

export default MainPage;
