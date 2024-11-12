function inputNumberArray(): number[] {
    const numbers: number[] = [];
    let input: string | null;

    do {
        input = prompt("������� ����� (��� ���������� ����� ������� ������ ������):");
        if (input && input.trim() !== "") {
            const num = parseFloat(input.trim());
            if (!isNaN(num)) numbers.push(num);
        }
    } while (input && input.trim() !== "");

    return numbers;
}

console.log("�������� �������:", inputNumberArray());