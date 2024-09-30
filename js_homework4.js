function checkProbabilityTheory(count) {
    let evenNumber = 0;
    let oddNumber = 0;

    for (let i = 0; i < count; i++) {
        const number = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        if (number % 2 === 0) {
            evenNumber++;
        } else {
            oddNumber++;
        }
    }
    const totalNumbers = evenNumber + oddNumber;
    const evenPercentage = (evenNumber / totalNumbers) * 100;
    const oddPercentage = (oddNumber / totalNumbers) * 100;

    console.log(`Кількість згенерованих чисел: ${totalNumbers}`);
    console.log(`Сумма парних: ${evenNumber}, Сума непарних: ${oddNumber}`);
    console.log(`Відсоток парних: ${evenPercentage.toFixed(2)}%, Відсоток непарних: ${oddPercentage.toFixed(2)}%`);

    return { evenPercentage, oddPercentage };
}
checkProbabilityTheory(10);
checkProbabilityTheory(100);
checkProbabilityTheory(1000);
checkProbabilityTheory(10000);
checkProbabilityTheory(100000);