---
import Column from './Column.astro';
import SearchBar from './SearchBar.astro';
import { type ColumnData } from '../types';

const columns: ColumnData[] = [
  {
    title: 'to-do',
    tasks: [
      {
        category: '[UI] Card Component',
        title: 'Create a card component',
        description:
          'Create a card component that will be used to display tasks in the kanban board.',
        assignees: [
          { initials: 'VH', color: 'blue' },
          { initials: 'AG', color: 'orange' },
        ],
      },
      {
        category: '[UI] Modal Component',
        title: 'Create a modal component',
        description:
          'Create a modal component that will be used to add new tasks to the kanban board.',
        assignees: [{ initials: 'ML', color: 'pink' }],
      },
      {
        category: '[UI] Column Component',
        title: 'Create a column component',
        description:
          'Create a column component that will be used to display tasks in the kanban board.',
        assignees: [
          { initials: 'VH', color: 'blue' },
          { initials: 'AG', color: 'orange' },
        ],
      },
      {
        category: '[UI] Modal Component',
        title: 'Create a modal component',
        description:
          'Create a modal component that will be used to add new tasks to the kanban board.',
        assignees: [{ initials: 'ML', color: 'pink' }],
      },
      {
        category: 'Integrate UI Components',
        title: 'Integrate UI components',
        description:
          'Integrate all UI components into the kanban board and make sure they work together.',
        assignees: [
          { initials: 'VH', color: 'blue' },
          { initials: 'AG', color: 'orange' },
        ],
      },
      {
        category: '[LOGIC] Search functionality',
        title: 'Add search functionality',
        description:
          'Add search functionality to the kanban board so that users can easily find tasks.',
        assignees: [{ initials: 'ML', color: 'pink' }],
      },
      {
        category: '[LOGIC] Drag and Drop API',
        title: 'Implement drag and drop',
        description:
          'Implement the drag and drop API so that users can move tasks between columns.',
        assignees: [
          { initials: 'VH', color: 'blue' },
          { initials: 'AG', color: 'orange' },
        ],
      },
    ],
  },
  {
    title: 'in-progress',
    tasks: [
      {
        category: 'DEVELOPMENT',
        title: 'Implement design screens',
        description:
          'Our designers created 6 screens for a website that needs to be implemented by our dev team.',
        assignees: [
          // { initials: 'VH', color: 'blue' },
          // { initials: 'LK', color: 'green' },
        ],
      },
    ],
  },
  {
    title: 'done',
    tasks: [
      {
        category: 'DEVELOPMENT',
        title: 'Fix bugs in the CSS code',
        description:
          'Fix small bugs that are essential to prepare for the next release that will happen this quarter.',
        assignees: [
          { initials: 'HU', color: 'pink' },
          { initials: 'NE', color: 'orange' },
        ],
      },
      {
        category: 'TYPOGRAPHY',
        title: 'Proofread final text',
        description:
          'The text provided by marketing department needs to be proofread so that we make sure that it fits into our design.',
        assignees: [{ initials: 'AG', color: 'orange' }],
      },
      {
        category: 'DESIGN SYSTEM',
        title: 'Responsive design',
        description:
          'All designs need to be responsive. The requirement is that it fits all web and mobile screens.',
        assignees: [
          { initials: 'VH', color: 'blue' },
          { initials: 'AG', color: 'orange' },
        ],
      },
    ],
  },
];
---

<div class="p-8 font-sans">
  <div class="flex justify-between items-center mb-8">
    <h1 class="text-2xl font-semibold">Kanbanaza</h1>
    <SearchBar />
  </div>

  <div class="md:grid md:grid-cols-3 md:gap-6 flex gap-6 overflow-x-auto pb-4 snap-x">
    {
      columns.map((column, index) => (
        <div class="min-w-[85vw] md:min-w-0 snap-center">
          <Column data={column} columnIndex={index} />
        </div>
      ))
    }
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const tasks = document.querySelectorAll('[data-task-id]');
    tasks.forEach((task) => {
      task.addEventListener('dragstart', dragStart);
    });
  });

  function dragStart(event) {
    if (event.target.hasAttribute('data-task-id')) {
      event.dataTransfer.setData('text/plain', event.target.getAttribute('data-task-id'));
      event.dataTransfer.effectAllowed = 'move';

      setTimeout(() => {
        event.target.classList.add('opacity-50');
      }, 0);
    }
  }

  window.allowDrop = function (event) {
    event.preventDefault();
  };

  window.dropTask = function (event) {
    event.preventDefault();

    const taskId = event.dataTransfer.getData('text/plain');
    const draggedTask = document.getElementById(taskId);

    if (!draggedTask) return;

    draggedTask.classList.remove('opacity-50');

    const dropContainer = event.target.closest('.task-container');
    if (!dropContainer) return;

    dropContainer.appendChild(draggedTask);

    console.log(
      `Task ${taskId} moved to column ${dropContainer.getAttribute('data-column-index')}`,
    );
  };
</script>
