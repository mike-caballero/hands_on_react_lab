import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ProjectList from '../ProjectList';
import { MOCK_PROJECTS } from '../MockProjects';
import userEvent from '@testing-library/user-event';

describe('<ProjectList />', () => {
  const setup = () =>
    render(
        <MemoryRouter>
          <ProjectList projects={MOCK_PROJECTS} />
        </MemoryRouter>
    );

  beforeEach(() => {});

  test('should render without crashing', () => {
    setup();
    expect(screen).toBeDefined();
  });


  test('should display list', () => {
    setup();
    expect(screen.getAllByRole('heading')).toHaveLength(MOCK_PROJECTS.length);
    expect(screen.getAllByRole('img')).toHaveLength(MOCK_PROJECTS.length);
    expect(screen.getAllByRole('link')).toHaveLength(MOCK_PROJECTS.length);
    expect(screen.getAllByRole('button')).toHaveLength(MOCK_PROJECTS.length);
  });
});