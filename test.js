const some = [
  {
    item: "ㅋ1",
    nameKo: "ㅌ1",
    children: [
      {
        item: "ㅋ2",
        nameKo: "ㅌ2",
        children: [
          {
            item: "ㅋ3",
            nameKo: "ㅌ3",
            children: [
              { item: "ㅋ4", nameKo: "ㅌ4", children: [1, 2, 3] },
              { item: "ㅋ4", nameKo: "ㅌ4", children: [1, 2, 3] },
            ],
          },
        ],
      },
      {
        item: "ㅋ2",
        nameKo: "ㅌ2",
        children: [
          {
            item: "ㅋ3",
            nameKo: "ㅌ3",
            children: [
              { item: "ㅋ4", nameKo: "ㅌ4", children: [] },
              { item: "ㅋ4", nameKo: "ㅌ4", children: [] },
            ],
          },
        ],
      },
    ],
  },
];

const option1 = some.map((item) => {
  return {
    value: `${item.id}`,
    label: item.nameKo,
    children: item.children.length
      ? item.children.map((item) => ({
          value: `${item.id}`,
          label: item.nameKo,
          children: item.children.length
            ? item.children.map((item) => ({
                value: `${item.id}`,
                label: item.nameKo,
                children: item.children.length
                  ? item.children.map((item) => ({
                      value: `${item.id}`,
                      label: item.nameKo,
                    }))
                  : null,
              }))
            : null,
        }))
      : null,
  };
});

const recursiveMap = (data) =>
  data.map((item) => ({
    value: `${item.id}`,
    label: item.nameKo,
    children: item.children?.length && recursiveMap(item.children),
  }));
const option2 = recursiveMap(some);
console.log("o1", option1);
console.log("o2", option2);
