/**
 * work listのidごとに昇順に並び替え
 * @param Object
 * @return Array
 */
const sortWorks = (works) => {
    const values =  Object.values(works)
    // work idの昇順に並び替え
    const sorted = values.sort((a, b) => a.id - b.id);
    return sorted;
}

module.exports = sortWorks;
