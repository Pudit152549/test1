const employees = [
    {
      firstName: 'Alfred',
      lastName: 'Ondricka',
      skills: [
        { name: 'Lick elbows', level: 'Expert' },
        { name: 'Cooking',      level: 'Intermediate' },
        { name: 'JavaScript',   level: 'Advanced' }
      ]
    },
    {
      firstName: 'Ardith',
      lastName: 'Rogahn',
      skills: [
        { name: 'Lick elbows', level: 'Godmaster' },
        { name: 'Python',      level: 'Advanced' }
      ]
    },
    {
      firstName: 'Britney',
      lastName: 'Medhurst',
      skills: [
        { name: 'Cooking',      level: 'Expert' },
        { name: 'Lick elbows',  level: 'Intermediate' }
      ]
    },
    {
      firstName: 'Carmelia',
      lastName: 'Daniel',
      skills: [
        { name: 'Lick elbows', level: 'Expert' },
        { name: 'Cooking',     level: 'Beginner' }
      ]
    }
  ];
  
  function getLickElbowMasters(list) {
    return list
      // 1. กรอง
      .filter(emp => {
        // หา skill “Lick elbows”
        const lick = emp.skills.find(s => s.name === 'Lick elbows');
        // สร้าง array ของชื่อสกิล
        const names = emp.skills.map(s => s.name);
        return (
          !!lick &&                                         // ต้องเจอ
          ['Expert','Godmaster'].includes(lick.level) &&    // ระดับต้อง Expert/​Godmaster
          !names.includes('Cooking')                        // ไม่มี Cooking
        );
      })
      // 2. แปลงเป็น { fullName, lickLevel }
      .map(emp => {
        const lick = emp.skills.find(s => s.name === 'Lick elbows');
        return {
          fullName: `${emp.firstName} ${emp.lastName}`,
          lickLevel: lick.level
        };
      })
      // 3. เรียงชื่อเต็ม A → Z
      .sort((a, b) => a.fullName.localeCompare(b.fullName));
  }
  
  const result = getLickElbowMasters(employees);
  console.log(result);