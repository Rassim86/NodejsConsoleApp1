function inputNumberArray(): number[] {
    const numbers: number[] = [];
    let input: string | null;

    do {
        input = prompt("������� ����� (��� ���������� ����� ������� ������ ������):");
        if (input && input.trim() !== "") {
            const num = parseFloat(input.trim());
            if (!isNaN(num)) {
                numbers.push(num);
            }
        }
    } while (input && input.trim() !== "");

    return numbers;
}

let numbers3: number[] = inputNumberArray();
if (numbers3.length >= 4) {
    console.log(numbers3.slice(0, 2).concat(numbers3.slice(numbers3.length - 2, numbers3.length)));
} else {
    console.log(numbers3.slice(0, 2));
}
//console.log("�������� �������:", numbers);
//console.log(numbers.length); //����� �������
//numbers.push(99, 99) //��������� ���� ��� ��������� ��������� � �����
//console.log("�������� �������:", numbers);
//let lastElem: number | undefined = numbers.pop(); // ������� ��������� ������� � ���������� ���
//console.log(lastElem);
//let firstElem: number | undefined = numbers.shift(); // ������� ������ ������� � ���������� ���
//console.log(firstElem);
//console.log("�������� �������:", numbers);
//numbers.unshift(99, 99); // ��������� ���� ��� ��������� ��������� � ������
//console.log("�������� �������:", numbers);
//const numbers2: number[] = [55, 55, 55];
//const combined: number[] = numbers.concat(numbers2); // ���������� ��� � ����� �������� � ���������� �����
//console.log("�������� �������:", combined);
//const joined: string = numbers.join('-'); // ��� �������� � ������ � �������������
//console.log(joined);
//const slice: number[] = numbers.slice(1, 4); // ���� ��������� (������, �����), ���������� ����� ������
//console.log(slice);
//console.log("�������� �������:", numbers);
//numbers.splice(2, 1, 6); // ������� ��� ��������� ��������. (������, ����������, ��������)
//console.log("�������� �������:", numbers);
//console.log();

