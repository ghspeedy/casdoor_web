
// 定义一个正则表达式，用于匹配import语句
const import_pattern = /import\s+(\w+)\s+from\s+('|")([.\w/]+)('|");/g;

// 假设原始代码的一行文本为：import MyComponent from './components/MyComponent';
const original_line = "import MyComponent from './components/MyComponent';";

// 使用正则表达式匹配import语句
const match = import_pattern.exec(original_line);

if (match) {
  // 如果匹配成功，将import语句转换为lazy import语句
  const [, componentName, , modulePath] = match;
  const LazyComponent = lazy(() => import(modulePath));
  const SuspendedComponent = (props) => (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
  
  // 使用转换后的lazy import语句代替原始的import语句
  const transformed_line = `const ${componentName} = ${SuspendedComponent};`;
  
  console.log(transformed_line); // 输出结果：const MyComponent = (props) => (<Suspense fallback={<div>Loading...</div>}><LazyComponent {...props} /></Suspense>);
} else {
  console.log('No match found');
}
