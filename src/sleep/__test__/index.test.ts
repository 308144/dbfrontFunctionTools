import sleep from '..';

test('测试延时效果', async () => {
  const timer = Date.now();
  await sleep(2000);
  const timer2 = Date.now();
  expect(timer2 - timer - 2000).toBeLessThan(10);
});
