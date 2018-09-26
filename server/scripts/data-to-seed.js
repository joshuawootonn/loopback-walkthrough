module.exports.student = [
  {
    first_name: 'Joshua',
    last_name: 'Wootonn'
  },
  {
    first_name: 'John',
    last_name: 'Doe'
  }
]

module.exports.subject = [
  {
    name: 'math'
  },
  {
    name: 'science'
  }
]

module.exports.locker = [
  {
    number: 100,
    student_id: 1
  },
  {
    number: 101,
    student_id: 2
  },
  {
    number: 102,
    student_id: null
  }
]

module.exports.class = [
  {
    name: 'Algebra 1',
    subject_id: '1'
  },
  {
    name: 'Algebra 2',
    subject_id: '1'
  },
  {
    name: 'Biology',
    subject_id: '2'
  },
  {
    name: 'Chemistry',
    subject_id: '2'
  },
]

module.exports.enrollment = [
  {
    student_id: 1,
    class_id: 1
  },
  {
    student_id: 1,
    class_id: 3
  },
  {
    student_id: 2,
    class_id: 2
  },
  {
    student_id: 2,
    class_id: 4
  },
]

module.exports.teacher = [
  {
    first_name: 'Jane',
    last_name: 'Smith',
    class_id: 1,
    subject_id: 1
  },
  {
    first_name: 'James',
    last_name: 'Barker',
    class_id: 2,
    subject_id: 1
  },
  {
    first_name: 'Lance',
    last_name: 'Brown',
    class_id: 3,
    subject_id: 2
  },
  {
    first_name: 'Julie',
    last_name: 'Brown',
    class_id: 4,
    subject_id: 2
  },
]